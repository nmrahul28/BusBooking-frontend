import React from 'react'
import Grid from '@material-ui/core/Grid';

function TripTemplate(props) {
    return (
        <Grid container direction="column">
            <Grid item>
                {props.header}
            </Grid>
            {props.trips}
        </Grid>
    )
}

export default TripTemplate
