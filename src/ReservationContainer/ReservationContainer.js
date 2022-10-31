import './ReservationContainer.css';
import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';


function ReservationContainer(props) {
    const allCards = props.reservations.map(reservation => {
        return <ReservationCard 
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            key={reservation.id}
            id={reservation.id}
        />
    })
    return (
        <section className="reservation-container">
            { allCards }
        </section>
    )
}

export default ReservationContainer;