import React, { Component } from 'react';
import './Taskbar.css';
import Button from '../../sub-components/Button/Button';

class Taskbar extends Component {
    render() {
        return (
            <div className="taskbar">
                <Button>Hello</Button>
            </div>
        );
    }
}

export default Taskbar;