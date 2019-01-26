import React, { Component, RefObject, createRef } from 'react';
import { BackgroundGenerator } from '../backgrounds/BackgroundGenerator'
import { Grids } from '../backgrounds/Grids'
import './App.css';

interface IProps {

}

interface IState {

}

class App extends Component<IProps, IState> {

    private background: RefObject<HTMLCanvasElement> = createRef()
    private backgroundGenerator?: BackgroundGenerator

    constructor (props: IProps) {
        super(props)
        this.backgroundGenerator = new Grids(this.background)
    }

    componentDidMount () {
        if (this.backgroundGenerator) this.backgroundGenerator.mount()
    }

    componentWillUnmount () {
        if (this.backgroundGenerator) this.backgroundGenerator.unmount()
    }

    render() {
        return (
            <div className="App">
                <canvas ref={this.background} className="background"></canvas>
            </div>
        )
    }
}

export default App;
