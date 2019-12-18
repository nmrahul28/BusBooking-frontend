import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BusCard from './BusCard.js';
import Header from './Header.js';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";
import InputFeild from './InputFeild';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
    root: {
        marginTop: "10px",
        marginLeft: "10px",
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
})

const Trips = (props) => {
    const classes = useStyles();
    const trips = props.location.state.tripData
    const tempTrips = [...trips]
    const [tripData, setTripData] = React.useState([]);
    const [flag, setFlag] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [temp, setTemp] = React.useState(tempTrips);

    useEffect(() => {
        if (company) {
            let searchdata = trips.filter((ele) => {
                if (ele.busdetails.buscompany.companyName === company) {
                    return ele;
                }
            })
            setTripData(searchdata);
        }
        else if (flag) {
            setTripData(trips);
        }
        else {
            setTripData(temp);
        }
    }, [flag, company]);

    const sortBy = () => {
        if (flag === '' || flag === 'true') {
            trips.sort((a, b) => (b.busdetails.buscompany.rating - a.busdetails.buscompany.rating));
            setFlag("false")
        }
        else {
            trips.sort((a, b) => (a.busdetails.buscompany.rating - b.busdetails.buscompany.rating));
            setFlag("true")
        }
    }

    var companies = trips.map((ele) => {
        return ele.busdetails.buscompany.companyName;
    })
    companies = Array.from(new Set(companies));

    const setCompanyName = (data) => {
        setCompany(data);
    }
    const reset = () => {
        setFlag('')
    }

    return (
        <Grid container direction="column">
            <Grid item>
                <Header></Header>
            </Grid>
            {trips.length !== 0 ?
                <Grid container alignItems="center" direction="row">
                    <Grid item xs>
                        <InputFeild className="col-md-6" getData={setCompanyName} label="Filter By Company" cityData={companies}></InputFeild>
                    </Grid>
                    <Grid item>
                        <RefreshIcon style={{ color: "red", fontSize: "30px", marginTop: "10px" }} onClick={reset}></RefreshIcon>
                    </Grid>
                    <Grid item>
                        {flag === "true"
                            ? <b><p style={{ display: "inline-block", color: "purple", marginTop: "10px" }}>Low To High</p></b>
                            : (flag === "false" ? <b><p style={{ color: "green", marginTop: "10px" }}>High To Low</p></b>
                                : null)
                        }
                    </Grid>
                    <Grid item>
                        <Button className={classes.root} onClick={sortBy}>Sort By Rating</Button>
                    </Grid>
                </Grid>
                : <h4 style={{ textAlign: "center", color: "red" }}>No Trips Available</h4>
            }
            <Grid container direction="column" alignItems="center">
                {tripData.map((ele, index) => {
                    return (<Grid item key={index} xs={12}>
                        <BusCard key={index} dataObject={ele}></BusCard>
                    </Grid>)
                })}

            </Grid>
        </Grid>
    )
}

export default Trips;