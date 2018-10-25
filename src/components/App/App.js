import React, { Component } from 'react';
import './App.css';
import Taskbar from '../Taskbar/Taskbar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Taskbar />
            </div>
        );
    }
}

export default App;
