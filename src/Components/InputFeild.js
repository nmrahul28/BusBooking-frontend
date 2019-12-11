import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const InputFeild = (props) => {
    function handleInputChange(e, value) {
        props.getData(value)
    }
    return (
        <Autocomplete
            id="combo-box-demo"
            options={props.cityData}
            getOptionLabel={(option) => option}
            style={{ width: 300, marginTop:10 }}
            onChange={handleInputChange}
            renderInput={params => (
                <TextField {...params} label={props.label} variant="outlined" fullWidth />
            )}
        />
    );
}
export default InputFeild;