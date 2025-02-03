#!/usr/bin/env python3

from random import randint, choice as rc, random
from sqlalchemy import text
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta
from faker import Faker
from config import db, app
from models import Hive, Inspection, HoneyPull, CountCategory, Queen, User, Event, Signup

fake = Faker()

with app.app_context():

    print("Deleting all records...")

    Signup.query.delete()
    Event.query.delete()    
    Inspection.query.delete()
    HoneyPull.query.delete()
    Queen.query.delete()
    Hive.query.delete()
    User.query.delete()

    print("Creating users...")

    users = []
    for i in range(5):
        first_name = fake.first_name()
        last_name = fake.last_name()
        username = f'{first_name}.{last_name}{randint(1, 20)}'

        user = User(
            username=username,
            first_name=first_name,
            last_name=last_name,
            phone_number=str(randint(1000000000, 9999999999)),
            email=f'{username}@gmail.com',
            zipcode=fake.zipcode()
        )
        user.password_hash = user.username + 'password'

        users.append(user)

    db.session.add_all(users)
    db.session.commit()

    print("Creating hives...")

    hives = []
    for user in users:
        first_hive = datetime.now().date() - timedelta(days=randint(30, 3*365))
        hive_date = first_hive

        while hive_date <= datetime.now().date():
            hive = Hive(
                user_id=user.id,
                date_added=hive_date,
                material=rc(['Wood', 'Polystyrene', 'Other']),
                address_line=fake.street_address(),
                city=fake.city(),
                state=fake.state(),
                postal_code=fake.zipcode()
            )
            hives.append(hive)

            hive_date += timedelta(days=randint(100, 365))

    db.session.add_all(hives)
    db.session.commit()

    print("Creating queens...")

    queens = []
    for hive in hives:
        queen = Queen(
            hive_id=hive.id,
            status=rc(['marked', 'unmarked', 'clipped']),  # Valid statuses
            origin='original',
            species=rc(['Italian', 'Carniolan', 'Buckfast', 'Caucasian', 'Russian', 'Cordovan', 'Other']),  # Valid species
            date_introduced=hive.date_added
        )
        queens.append(queen)

        queen_date = hive.date_added + timedelta(days=randint(30, 100))

        while queen_date <= datetime.now().date():
            queen = Queen(
                hive_id=hive.id,
                status=rc(['marked', 'unmarked', 'clipped']),  # Valid statuses
                origin=rc(['swarm cells', 'purchased', 'original']),  # Valid origins
                species=rc(['Italian', 'Carniolan', 'Buckfast', 'Caucasian', 'Russian', 'Cordovan', 'Other']),  # Valid species
                date_introduced=queen_date,
            )
            queens.append(queen)

            queen_date += timedelta(days=randint(30, 100))

    db.session.add_all(queens)
    db.session.commit()

    print("Creating honey pulls...")

    honey_pulls = []

    for hive in hives:
        start_date = hive.date_added
        reset_date = start_date

        while start_date:
            pull_date = reset_date + timedelta(days=randint(90, 180))
            pull_date = None if pull_date > datetime.now().date() else pull_date

            honey_pull = HoneyPull(
                hive_id=hive.id,
                date_reset=reset_date,
                date_pulled=pull_date,                
                weight=random()*200 if pull_date is not None else None
            )
            honey_pulls.append(honey_pull)

            if pull_date is None:
                break

            reset_date = pull_date + timedelta(days=randint(1, 14))

    db.session.add_all(honey_pulls)
    db.session.commit()

    print("Creating inspections...")

    inspections = []
    count_categories = [option.name for option in CountCategory]

    for honey_pull in honey_pulls:
        start_date = honey_pull.date_reset
        stop_date = honey_pull.date_pulled if honey_pull.date_pulled else datetime.now().date()
        inspection_date = start_date

        hive = honey_pull.hive

        starting_supers = randint(1, 3)
        starting_bodies = randint(2, 4)

        while inspection_date <= stop_date:

            inspection = Inspection(
                honey_pull_id = honey_pull.id,
                date_checked = inspection_date,
                super_count=starting_supers,
                hive_body_count=starting_bodies,
                bias = randint(0, starting_bodies),
                ants_present = rc([True, False]),
                slugs_present = rc([True, False]),
                hive_beetles_present = rc([True, False]),
                wax_moths_present = rc([True, False]),
                wasps_hornets_present = rc([True, False]),
                mice_present = rc([True, False]),
                robber_bees_present = rc([True, False]),
                num_pollen_patties = randint(0, 2),
                num_sugar_syrup_frames = randint(0, 2),
                temp = round(randint(10, 35) + random(), 1),
                weather_conditions = rc(['Sunny', 'Overcast', 'Rainy', 'Snowy', 'Windy']),
                humidity = round(randint(40, 90) + random(), 1),
                fate = rc(['Dead', 'Swarmed', 'Split', 'Thriving']),
                has_twisted_larvae = rc([True, False]),
                has_chalkbrood = rc([True, False]),
                varroa_mite_count = randint(0, 100),
                activity_surrounding_hive = rc(count_categories),
                stability_in_hive = rc(count_categories)
            )
            inspections.append(inspection)

            inspection_date += relativedelta(weeks=1)

    db.session.add_all(inspections)
    db.session.commit()

    # Creating events...
    print("Creating events...")

    events = []
    for user in users:
        if random()>.7:
            event = Event(
                user_id=user.id,
                title=fake.bs(),  # Fake name for the event
                event_date=fake.date_this_year(),  # Random date in the current year
                descr=fake.text(max_nb_chars=200),  # Fake description for the event
                zipcode=fake.postcode()  # Random location
            )
            events.append(event)

    db.session.add_all(events)
    db.session.commit()

    print("Creating signups...")

    signups = []
    for event in events:
        for user in users:
            if random()>.6 and event.user_id != user.id:
                signup = Signup(user_id=user.id, event_id=event.id)
                signups.append(signup)

    db.session.add_all(signups)
    db.session.commit()


    print("Seeding Complete.")