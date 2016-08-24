import React from 'react';
import { Button } from 'react-bootstrap';

const TimeButton = (props) => {
    console.log(props);
    return(
        <Button disabled={props.buttonsDisabled} onClick={props.onClick}>{props.time}</Button>
    );
}

export default TimeButton;