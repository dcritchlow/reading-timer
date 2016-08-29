import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import TimeButton from './TimeButton';
import Timer from './Timer.js';
import TimerFinished from './TimerFinished';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      color: this.getColor(),
      callback: () => this.timerEnded(),
      timerVisible: false,
      buttonsDisabled: false,
      cancel: () => this.cancelTimer(),
      timerEnded: false,
      audioContext: new AudioContext(),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      seconds: value,
      color: this.getColor(),
      timerVisible: !this.state.timerVisible,
      buttonsDisabled: !this.state.buttonsDisabled,
      timerEnded: false
    });
  }

  endTimer() {
    if(this.state.timerEnded){
      this.playSound();
    }

    this.setState({
      seconds:0,
      timerVisible: !this.state.timerVisible,
      buttonsDisabled: !this.state.buttonsDisabled
    });
  }

  timerEnded() {
    this.setState({
      timerEnded: true
    }, () => this.endTimer());
  }

  cancelTimer() {
    this.setState({
      timerEnded: false
    }, () => this.endTimer());
  }

  getColor() {
    return '#'+('00000'+(Math.random()*16777216<<0).toString(16)).substr(-6);
  }

  playSound(){
    let oscillator = this.state.audioContext.createOscillator()
    let context = this.state.audioContext;
    
    oscillator.type = "square";
    oscillator.frequency.value = 261.63;
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 5);
    oscillator.connect(context.destination);
  }

  render() {
    let buttonsDisabled = this.state.buttonsDisabled;
    let timerVisible = this.state.timerVisible;
    let timerEnded = this.state.timerEnded;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Reading Timer</h2>
          <div className="Buttons">
            <ButtonGroup> 
              <TimeButton time='10 minutes' onClick={!buttonsDisabled ? () => this.handleClick(600) : null}  disabled={buttonsDisabled}/>
              <TimeButton time='20 minutes' onClick={!buttonsDisabled ? () => this.handleClick(1200) : null} disabled={buttonsDisabled}/>
              <TimeButton time='30 minutes' onClick={!buttonsDisabled ? () => this.handleClick(1800) : null} disabled={buttonsDisabled}/>
            </ButtonGroup>            
          </div>
          {
            timerVisible 
            ? <Timer {...this.state} />
            : null
          }
          {
            timerEnded
            ? <TimerFinished /> 
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;