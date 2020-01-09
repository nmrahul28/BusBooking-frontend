import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBox from '../Molecules/SearchBox.js';
import Custombutton from '../Atoms/Custombutton.js';
import { withRouter } from "react-router-dom";

function Searchbusbox(props) {
    const [cities, setCities] = useState([]);
    const [sourceCity, setSource] = React.useState("");
    const [destinationCity, setDestination] = React.useState("")
    const [date, setDate] = React.useState("");

    const setSourceCity = (data) => {
        setSource(data)
    }
    const setDestinationCity = (data) => {
        setDestination(data)
    }
    const handleChange = (e) => {
        setDate(e.target.value)
    }
    const search = () => {
        console.log(sourceCity, destinationCity, date)
        axios.get("http://localhost:8080/trips", { params: { sourceCity, destinationCity, date } })
            .then((res) => {
                console.log(res);
                props.history.push({
                    pathname: "/trips",
                    state: { tripData: res.data }
                })
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        axios.get("http://localhost:8080/getallcities").then((res) => {
            setCities(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="card">
            <div className="card-body">
                <SearchBox
                    getSource={setSourceCity}
                    getDestination={setDestinationCity}
                    getDateChange={(e) => { handleChange(e) }}
                    city={cities}
                    sourceLabel="Source City"
                    destinationLabel="Destination City"
                ></SearchBox>
                <div style={{ textAlign: "center" }}>
                    {sourceCity && destinationCity && date
                        ? <Custombutton buttonLabel="Search" clickSearch={search}></Custombutton>
                        : <Custombutton buttonLabel="Search" disable={true}></Custombutton>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Searchbusbox)
