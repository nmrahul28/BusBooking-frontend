import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import BusCard from './BusCard.js';
import Header from './Header.js';

const Trips = (props) => {
    const trips = props.location.state.tripData
    console.log(trips)
    const [tripData, setTripDate]=React.useState([]);
    useEffect(() => {
        setTripDate(trips);
    },[])
    return (
        <Grid container direction="column">
            <Grid item>
                <Header></Header>
            </Grid>
            <Grid item>
                <div style={{float:"right"}}>
                    <button>sort</button>
                </div>
            </Grid>
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
