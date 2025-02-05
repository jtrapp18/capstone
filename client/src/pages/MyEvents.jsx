import { useContext, useState, useEffect } from 'react';
import {WindowWidthContext} from "../context/windowSize";
import {UserContext} from '../context/userProvider'
import Events from '../components/Events';
import { getJSON, snakeToCamel, getNearbyZipcodes } from '../helper';
import { Button } from '../MiscStyling';
import EventForm from '../forms/EventForm'
import usePopupForm from '../hooks/usePopupForm'
import useCrudStateDB from '../hooks/useCrudStateDB';
import Loading from './Loading';
import styled from 'styled-components';
import { StyledContainer } from '../MiscStyling';

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  p {
    margin: 0;
  }
  
  span {
    color: var(--honey);
  }

  section {
    display: flex;
    justify-content: center;

  }

  input, button {
    margin: 5px;
  }

  input {
    color: black;

    &:hover {
      background: var(--yellow);
    }

    &#zipcode {
      width: 100px;
    }

    &#radius {
      width: 50px;
    }
  }
`

const MyEvents = () => {
  const { user } = useContext(UserContext);
  const { isMobile } = useContext(WindowWidthContext);
  const [events, setEvents] = useState([]);
  const [eventsHosting, setEventsHosting] = useState([]);
  const [eventsAttending, setEventsAttending] = useState([]);
  const [eventsFiltered, setEventsFiltered] = useState([]);
  const {PopupForm, setActiveItem, setShowNewForm, setShowDeleted} = usePopupForm(EventForm);
  const [filterZip, setFilterZip] = useState(!user ? '' : user.zipcode);
  const [filterRadius, setFilterRadius] = useState(5);
  const [nearbyZipcodes, setNearbyZipcodes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const eventFiltering = (events) => {
 
    const eventsHosting = !user ? [] : events.filter((event) => event.userId === user.id)
    const  eventsAttending = !user ? [] : events.reduce((acc, event) => {
        if (event.signups.some(signup => signup.userId === user.id)) {
          acc.push(event);
        }
        return acc;
      }, []);

      const eventsOther = !user
      ? events
      : events.filter(event =>
          !eventsHosting.includes(event) && !eventsAttending.includes(event)
        );

      const eventsFiltered = nearbyZipcodes.length===0
      ? eventsOther
      : eventsOther.filter(event =>
          nearbyZipcodes.includes(event.zipcode)
        );

      setEventsHosting(eventsHosting);
      setEventsAttending(eventsAttending);
      setEventsFiltered(eventsFiltered);
  }

  useEffect(() => {
    getJSON("events").then((events) => {
      const eventsTransformed = snakeToCamel(events);
      setEvents(eventsTransformed);
      eventFiltering(eventsTransformed);
    });
  }, []);

  useEffect(() => {
    eventFiltering(events);
  }, [user]);

  const {addItem, updateItem, deleteItem, addToKey, deleteFromKey} = useCrudStateDB(setEvents, "events", 
    eventFiltering, setActiveItem);

  function apiZipcodeCall() {
    if (filterZip) {
      getNearbyZipcodes(filterZip, filterRadius).then((json) => {
        const zipcodesTransformed = snakeToCamel(json);
        const zipcodeList = zipcodesTransformed.zipCodes.map(z=>z.zipCode);
        setNearbyZipcodes(zipcodeList);
        setIsFiltered(true);

        console.log("Nearby Zipcodes:", zipcodeList)
      });
    }
  }

  const addEvent = (event) => {
    addItem(event);
    setShowNewForm(false);
    setShowDeleted(false);
  };

  const viewEvent = (event) => {
    setActiveItem(event)
    setShowNewForm(false);
    setShowDeleted(false);
  };

  const cancelEvent = (event) => {
    deleteItem(event);
    setShowDeleted(true);
  };
  
  const signupEvent = (event) => {
    const signup = ({
      userId: user.id,
      eventId: event.id
    })

    addToKey(event.id, "signups", signup)
  };
   
  const cancelSignup = (event) => {
    const eventId = event.id
    const signup = event.signups.filter(signup=>signup.userId===user.id)[0]
    deleteFromKey(eventId, "signups", signup.id)
  };

  const eventCardProps = {
    host: {btnLabel: "Manage Event", handleEventBtn: viewEvent},
    attendee: {role: "Attending", btnLabel: "Remove Event", handleEventBtn: cancelSignup},
    other: {role: "Other", btnLabel: "Sign Up", handleEventBtn: signupEvent},
  }

  const clearFilters = () => {
    setNearbyZipcodes([]);
    setIsFiltered(false);
    setFilterZip('');
  }

  if (!events) return <Loading />

  return (
      <StyledContainer>
        { user &&
          <>
            <h1>My Events</h1>
            <Button onClick={()=>setShowNewForm(true)}>Host a New Event</Button>
            <PopupForm
              addEvent={addEvent}
              cancelEvent={cancelEvent}
              updateEvent={updateItem}
            />
            <h3>. . . . . </h3>
            <br />
            <h3>Hosting</h3>
            <Events
              events={eventsHosting}
              eventCardProps={eventCardProps.host}
            />
            <h3>Attending</h3>
            <Events
              events={eventsAttending}
              eventCardProps={eventCardProps.attendee}
            />
          </>
        }
        <h1>Find Events</h1>
        <SearchContainer>
          <p htmlFor='zipcode'>Search near Zipcode: 
            <input
              id='zipcode'
              name='zipcode'
              onChange={(event)=>setFilterZip(event.target.value)}
              value={filterZip}
            >
            </input>

            within

            <input
              id='radius'
              type="number"
              name='radius'
              onChange={(event)=>setFilterRadius(event.target.value)}
              value={filterRadius}
            >
            </input>
            miles
          </p>
          {/* Manually click button to avoid making too many API calls */}
          <section>
            <Button onClick={apiZipcodeCall}>Submit</Button>
            <Button onClick={clearFilters}>Clear</Button>
          </section>
          {isFiltered ? <span>{`Filtered on events within ${filterRadius} miles of ${filterZip}`}</span> : <span>No Filters Applied</span>}
        </SearchContainer>
        <h3>. . . . . </h3>
        <Events
          events={eventsFiltered} 
          eventCardProps={eventCardProps.other}
        />
      </StyledContainer>
    );
  };
  
  export default MyEvents;
  