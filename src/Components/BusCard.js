import React from 'react'
import busimage from './../bus1.jpeg';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop:"50px"
    },
})

const BusCard = (props) => {
    const classes = useStyles();
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
                            <p className="card-text"><small className="text-muted">Arrival Date: {props.dataObject.arrivalTime}</small></p>
                        </div>
                        <div className="col-md-2" style={{ display: "inline-block" }}>
                            <p className="card-text"><small className="text-muted">AvailableSeats</small></p>
                            <p className="card-text">{props.dataObject.availableSeats} Seats</p>
                        </div>
                        <div className="col-md-2" style={{ display: "inline-block", float: "right" }}>
                            <Button className={classes.root}>Book</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusCard;
