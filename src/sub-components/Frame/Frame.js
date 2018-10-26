import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {

    render () {
        return (
            <div
                className={"frame-98" + (className ? ` ${className}` : '')}
                style={style}>{ children }</div>
        )
    }

}

export default Frame;