import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render () {
        return (
            <button className="button-98">{ this.props.children }</button>
        )
    }

}

export default Button;