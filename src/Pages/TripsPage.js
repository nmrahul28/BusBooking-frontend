import React from 'react'
import TripTemplate from '../templates/TripTemplate.js';
import Header from '../Molecules/Header.js';
import Trips from '../organisms/Trips.js';

function TripsPage(props) {
    return (
        <TripTemplate
            header={<Header />}
            trips={<Trips tripdetails={props.location.state.tripData} />} />
    )
}
export default TripsPage
