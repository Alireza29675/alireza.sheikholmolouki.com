import React, { Component } from 'react';
import './Box.css';

class Box extends Component {

    render () {
        const { style, children, className } = this.props;
        return (
            <div
                className={"box-98" + (className ? ` ${className}` : '')}
                style={style}>{ children }</div>
        )
    }

}

export default Box;