import React, { Component } from 'react';
import './Taskbar.css';
import { Button, Frame, Box } from '../../sub-components/components';

class Taskbar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            time: null,
            soundOn: true,
            startMenuIsOpen: false
        }
        this.init();
    }

    init () {
        window.addEventListener('click', (e) => {
            const clickedInStartMenu = document.querySelector('.start-menu').contains(e.target) || document.querySelector('.start-menu-button').contains(e.target);
            if (!clickedInStartMenu && this.state.startMenuIsOpen) {
                this.setState({ startMenuIsOpen: false })
            }
        })
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

    toggleStartMenu () {
        this.setState({ startMenuIsOpen: !this.state.startMenuIsOpen })
    }

    render() {
        return (
            <div className="taskbar">

                <Button onClick={this.toggleStartMenu.bind(this)} selected={this.state.startMenuIsOpen} className="start-menu-button">
                    <img src="./images/start.png" alt="Start Icon" />
                    <b>Start</b>
                </Button>

                <div className="tasks">
                    
                </div>

                <Frame className="tray">
                    <img className="sound icon"
                        alt="Sound Icon"
                        onClick={this.toggleSound.bind(this)}
                        src={`./images/icons/audio-${this.state.soundOn ? 'on' : 'off'}.png`} />
                    <time>{ this.state.time }</time>
                </Frame>

                <Box className={"start-menu" + (this.state.startMenuIsOpen ? ' open' : '')}></Box>

            </div>
        );
    }
}

export default Taskbar;