import React, { Component } from 'react';
import './Frame.css';

class Frame extends Component {

    render () {
        const { style, children, className } = this.props;
        return (
            <div
                className={"frame-98" + (className ? ` ${className}` : '')}
                style={style}>{ children }</div>
        )
    }

}

export default Frame;