import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    textfield: {
        width: "300px",
        marginTop: "10px",
    },
})

const Calander = (props) => {
    
    const classes = useStyles();
    var dateFormat = require('dateformat')
    var today = new Date();
    today = dateFormat(today, 'yyyy-mm-dd')

    return (
        <TextField className={classes.textfield} id="outlined-basic" variant="outlined"
            type="date" onChange={props.change} ></TextField>
    )
}
//  inputProps={{ min: today }}
export default Calander
