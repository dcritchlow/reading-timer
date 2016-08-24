import React, { Component } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import TimeButton from './TimeButton';
import Timer from './Timer.js'; //<Timer {...this.state} />
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 1200000,
      color: '#'+Math.floor(Math.random()*16777215).toString(16),
      callback: () => this.hideTimer(),
      timerVisible: false,
      buttonsDisabled: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      seconds: value,
      timerVisible: !this.state.timerVisible,
      buttonsDisabled: !this.state.buttonsDisabled
    });
  }

  hideTimer() {
    let audio = new Audio("http://soundbible.com/mp3/House%20Fire%20Alarm-SoundBible.com-1609046789.mp3");
    audio.play();
    // wait till sound is done playing to hide the timer
    setTimeout(() => {
      this.setState({
        timerVisible: !this.state.timerVisible,
        buttonsDisabled: !this.state.buttonsDisabled
      });
    }, 12000);
  }

  render() {
    let buttonsDisabled = this.state.buttonsDisabled;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Reading Timer</h2>
          <div className="Buttons">
            {
              buttonsDisabled
              ? 'Timer running...'
              : 
              <ButtonGroup> 
                <TimeButton time='10 minutes' onClick={() => this.handleClick(600)} />
                <TimeButton time='20 minutes' onClick={() => this.handleClick(1200)} />
                <TimeButton time='30 minutes' onClick={() => this.handleClick(1800)} />
              </ButtonGroup>
            }
            
          </div>
          {
            this.state.timerVisible
              ? <Timer {...this.state} />
              : null
          }
        </div>
      </div>
    );
  }
}

export default App;