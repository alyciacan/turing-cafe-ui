import React from 'react';
import './ReservationCard.css';


function ReservationCard({name, date, time, number}) {
    return (
        <section className="reservation-card">
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{time}</p>
            <p>{`Number of guests: ${number}`}</p>
            {/* <button>Cancel</button> */}
        </section>
    )
}

export default ReservationCard;