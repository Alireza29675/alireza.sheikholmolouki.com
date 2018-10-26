import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render () {
        const { style, selected, children, className } = this.props;
        return (
            <button
                className={"button-98" + (className ? ` ${className}` : '') + (selected ? ' selected' : '')}
                style={style}>{ children }</button>
        )
    }

}

export default Button;