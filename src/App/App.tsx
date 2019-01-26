import React, { Component, RefObject, createRef } from 'react';
import { BackgroundGenerator } from '../backgrounds/BackgroundGenerator'
import { Ants } from '../backgrounds'
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
        this.backgroundGenerator = new Ants(this.background)
    }

    componentDidMount () {
        if (this.backgroundGenerator) {
            this.backgroundGenerator.mount()
            this.backgroundGenerator.play()
        }
    }

    componentWillUnmount () {
        if (this.backgroundGenerator) {
            this.backgroundGenerator.unmount()
            this.backgroundGenerator.pause()
        }
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
