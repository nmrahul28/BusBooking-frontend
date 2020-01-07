import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    spacing: {
        maxWidth: "300px",
        marginTop: "10px",
    }
})

const InputFeild = (props) => {
    const classes = useStyles();
    function handleInputChange(e, value) {
        props.getData(value)
    }
    return (
        <Autocomplete
            className={classes.spacing}
            id="combo-box-demo"
            options={props.cityData}
            getOptionLabel={(option) => option}
            onChange={handleInputChange}
            renderInput={params => (
                <TextField {...params} label={props.label} variant="outlined" fullWidth />
            )}
        />
    );
}
export default InputFeild;