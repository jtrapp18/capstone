import { useContext, useState } from 'react';
import styled from "styled-components";
import {UserContext} from '../context/userProvider'
import NotLoggedInToast from '../components/NotLoggedInToast'
import { Button, Tag } from '../MiscStyling';
 
const StyledEventCard = styled.article`
    width: 100%;
    max-width: clamp(300px, 100%, 600px);
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: var(--shadow);

    .btn-container {
        padding-top: 2%;
        border-top: 3px double var(--honey);
        justify-content: space-between;
        display: flex;
    }

    .main-event {
        cursor: pointer;

        span {
            color: gray;
        }
    }
`

const EventCard = ({ event, btnLabel, handleEventBtn}) => {
    const { user } = useContext(UserContext);
    const [showToast, setShowToast] = useState(false);

    if (!event) return <p>Loading Card...</p>

    const { id,  signups, title, descr, zipcode, eventDate } = event

    const handleClick = () => {
        if (!user) {
            setShowToast(true);
        }

        else {
            handleEventBtn(event);
        }
    }

    return (
        <StyledEventCard>
            <div 
                className="main-event"
            >
                <span>{`${eventDate} | zipcode: ${zipcode}`}</span>
                <label>{title}</label>
                <p>{descr}</p>
            </div>
            <div className="btn-container">
                <Tag>{`${signups.length} Planning to Attend`}</Tag>
                <Button onClick={handleClick}>{btnLabel}</Button>
                {showToast && <NotLoggedInToast onClose={()=>setShowToast(false)}/>}
            </div>
        </StyledEventCard>
    );
}

export default EventCard;