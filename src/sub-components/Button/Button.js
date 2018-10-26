import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render () {
        const { style, selected, children, className, onClick } = this.props;
        return (
            <button
                onClick={onClick}
                className={"button-98" + (className ? ` ${className}` : '') + (selected ? ' selected' : '')}
                style={style}>{ children }</button>
        )
    }

}

export default Button;