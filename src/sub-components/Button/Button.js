import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render () {
        const { style, selected, children } = this.props;
        return (
            <button
                className={"button-98" + (selected ? ' selected' : '')}
                style={style}>{ children }</button>
        )
    }

}

export default Button;