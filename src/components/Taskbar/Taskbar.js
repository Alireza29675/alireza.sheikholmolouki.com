import React, { Component } from 'react';
import './Taskbar.css';
import Button from '../../sub-components/Button/Button';
import Frame from '../../sub-components/Frame/Frame';

class Taskbar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            time: null,
            soundOn: true
        }
    }

    componentDidMount () {
        this.setTime();
        this.clockInterval = setInterval(this.setTime.bind(this), 10 * 1000);
    }

    componentWillUnmount () {
        clearInterval(this.clockInterval);
    }

    setTime () {
        const time = (new Date()).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
        this.setState({ time })
    }

    toggleSound () {
        this.setState({ soundOn: !this.state.soundOn })
    }

    render() {
        return (
            <div className="taskbar">
                <Button selected={false} className="start-menu-button">
                    <img src="./images/start.png" alt="Start Icon" />
                    <b>Start</b>
                </Button>
                <div className="tasks">
                    
                </div>
                <Frame className="tray">
                    <img className="sound icon"
                        onClick={this.toggleSound.bind(this)}
                        src={`./images/icons/audio-${this.state.soundOn ? 'on' : 'off'}.png`} />
                    <time>{ this.state.time }</time>
                </Frame>
            </div>
        );
    }
}

export default Taskbar;