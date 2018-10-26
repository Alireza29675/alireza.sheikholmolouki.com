import React, { Component } from 'react';
import './Taskbar.css';
import Button from '../../sub-components/Button/Button';
import { relative } from 'path';

class Taskbar extends Component {
    render() {
        return (
            <div className="taskbar">
                <Button selected={false} className="start-menu-button">
                    <img src="./images/start.png" alt="Start Icon" />
                    <b>Start</b>
                </Button>
            </div>
        );
    }
}

export default Taskbar;