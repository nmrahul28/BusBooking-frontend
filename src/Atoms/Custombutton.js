import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
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
function Custombutton(props) {
    const classes = useStyles();
    return (
    <Button className={classes.root} onClick={props.clickSearch} disabled={props.disable}>{props.buttonLabel}</Button>
    )
}

export default Custombutton
