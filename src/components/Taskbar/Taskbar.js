import React, { Component } from 'react';
import './Taskbar.css';
import Button from '../../sub-components/Button/Button';

class Taskbar extends Component {
    render() {
        return (
            <div className="taskbar">
                <Button style={styles.startButton}><b>Start</b></Button>
            </div>
        );
    }
}

const styles = {
    startButton: {
        marginLeft: 2,
        height: 26
    }
}

export default Taskbar;