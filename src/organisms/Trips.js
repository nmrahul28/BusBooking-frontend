import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import BusCard from '../Molecules/BusCard.js';
import InputFeild from '../Atoms/InputFeild.js';
import RefreshIcon from '@material-ui/icons/Refresh';
import Custombutton from '../Atoms/Custombutton.js';

const Trips = (props) => {
    const trips = props.tripdetails
    const tempTrips = [...trips]
    const [tripData, setTripData] = React.useState([]);
    const [flag, setFlag] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [temp] = React.useState(tempTrips);

    useEffect(() => {
        if (company) {
            let searchdata = trips.filter((ele) => {
                if (ele.busdetails.buscompany.companyName === company) {
                    return true;
                }
                return false;
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
        <Grid item>
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
                        <Custombutton clickSearch={sortBy} buttonLabel="Sort By Rating"></Custombutton>
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