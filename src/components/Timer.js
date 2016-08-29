import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { Button } from 'react-bootstrap';
import './Timer.css';

const Timer = (props) => {
    return(
    <div className="Timer">
        <ReactCountdownClock 
            seconds={props.seconds}
            color={props.color}
            alpha={0.9}
            size={300}
            onComplete={props.callback}
        />
        <div>
            <Button bsStyle="danger" onClick={props.cancel}>Cancel</Button>
        </div>
    </div>
    );
}

export default Timer;