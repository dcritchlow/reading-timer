import React from 'react';
import ReactCountdownClock from 'react-countdown-clock';
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
    </div>
    );
}

export default Timer;