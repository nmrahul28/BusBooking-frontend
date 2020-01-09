import React from 'react'
import Grid from '@material-ui/core/Grid';

function SearchTemplate(props) {
    return (
        <Grid container direction="column">
            <Grid item>
                {props.header}
            </Grid>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '80vh' }}>
                <Grid item xs={12}>
                    {props.searchBus}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SearchTemplate
