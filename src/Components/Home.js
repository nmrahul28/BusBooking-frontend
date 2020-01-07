import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InputFeild from '../Atoms/InputFeild.js';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Header from './Header.js';
import Calander from '../Atoms/Calander.js';
import Custombutton from '../Atoms/Custombutton.js';
import SearchBox from '../Molecules/SearchBox.js';
import SearchTemplate from '../templates/SearchTemplate.js';
import busimage from './../bus1.jpeg';


const useStyles = makeStyles({
    space: {
        marginTop: 10
    },
    textfield: {
        marginTop: 10,
        width: 300,
    },
    root: {
        marginTop: 10,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
})

const Home = (props) => {
    const classes = useStyles();
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

    var dateFormat = require('dateformat')
    var today = new Date();
    today = dateFormat(today, 'yyyy-mm-dd')

    return (
        // <Grid container direction="column">
        //     <Grid item>
        //         <Header></Header>
        //     </Grid>
        //     <Grid
        //         container
        //         spacing={0}
        //         direction="column"
        //         alignItems="center"
        //         justify="center"
        //         style={{ minHeight: '80vh' }}>
        //         <Grid item xs={12}>
        //             <div className="card">
        //                 <div className="card-body">
        //                     <InputFeild getData={setSourceCity} label="Source City" cityData={cities} />
        //                     <InputFeild getData={setDestinationCity} label="Destination City" cityData={cities} />
        //                     <Calander value={date} change={(e) => { handleChange(e) }}></Calander>
        //                     <TextField id="outlined-basic" variant="outlined" className={classes.textfield}
        //                         type="date" inputProps={{ min: today }} value={date} onChange={(e) => { handleChange(e) }} ></TextField>
        //                     <div style={{ textAlign: "center" }}>
        //                         {sourceCity && destinationCity && date
        //                             ? <Button className={classes.root} onClick={search}>Search</Button>
        //                             : <Button className={classes.root} disabled={true} onClick={search}>Search</Button>}
        //                     </div>
        //                     <Custombutton label="Search" clickSearch={search}></Custombutton>
        //                 </div>
        //             </div>
        //         </Grid>
        //     </Grid>
        // </Grid>
        <SearchTemplate
            cityData={cities}
            sourceLabel="Source City"
            dstinationLabel="Destination City"
            source={setSourceCity}
            destination={setDestinationCity}
            setDate={date}
            setDateChange={(e) => { handleChange(e) }}
            buttonName="Search"
            Search={search}
            flag= {sourceCity && destinationCity && date}
        ></SearchTemplate>
    )
}

export default Home
