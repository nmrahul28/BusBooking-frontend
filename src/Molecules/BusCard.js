import React from 'react'
import busimage from './../bus1.jpeg';
import Custombutton from '../Atoms/Custombutton.js';

const BusCard = (props) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "100%", marginTop: "10px" }}>
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img src={busimage} width="60px" height='150px' style={{ borderRadius: "50%" }} className="card-img" alt="bus logo"></img>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <div className="col-md-2" style={{ display: "inline-block" }}>
                            <p className="card-text">BusId: {props.dataObject.busdetails.busId}</p>
                            <p className="card-text">{props.dataObject.busdetails.buscompany.companyName}</p>
                            <p className="card-text">Rating: {props.dataObject.busdetails.buscompany.rating}</p>
                        </div>
                        <div className="col-md-3" style={{ display: "inline-block" }}>
                            <p className="card-text"><small className="text-muted">From</small></p>
                            <h6 className="card-text">{props.dataObject.route.source.destinationCity}</h6>
                            <p className="card-text"><small className="text-muted">Departure Date: {props.dataObject.departureDate}</small></p>
                            <p className="card-text"><small className="text-muted">Departure Time: {props.dataObject.departureTime}</small></p>
                        </div>
                        <div className="col-md-3" style={{ display: "inline-block" }}>
                            <p className="card-text"><small className="text-muted">To</small></p>
                            <h6 className="card-text">{props.dataObject.route.destination.destinationCity}</h6>
                            <p className="card-text"><small className="text-muted">Arrival Date: {props.dataObject.arrivalDate}</small></p>
                            <p className="card-text"><small className="text-muted">Arrival Time: {props.dataObject.arrivalTime}</small></p>
                        </div>
                        <div className="col-md-2" style={{ display: "inline-block" }}>
                            <p className="card-text"><small className="text-muted">AvailableSeats</small></p>
                            <p className="card-text">{props.dataObject.availableSeats} Seats</p>
                        </div>
                        <div className="col-md-2" style={{ display: "inline-block", float: "right" }}>
                            <Custombutton buttonLabel="Book"></Custombutton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusCard;
