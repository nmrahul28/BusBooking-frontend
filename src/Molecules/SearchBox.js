import React from 'react'
import InputFeild from '../Atoms/InputFeild'
import Calander from '../Atoms/Calander'

function SearchBox(props) {
    const source = (data) => {
        props.getSource(data)
    }
    const destination = (data) => {
        props.getDestination(data)
    }
    return (
        <div>
            <InputFeild getData={source} cityData={props.city} label={props.sourceLabel}></InputFeild>
            <InputFeild getData={destination} cityData={props.city} label={props.destinationLabel}></InputFeild>
            <Calander change={props.getDateChange}></Calander>
        </div>
    )
}

export default SearchBox
