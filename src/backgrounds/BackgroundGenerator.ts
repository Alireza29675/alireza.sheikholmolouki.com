import { RefObject } from "react";

class BackgroundGenerator {

    protected _canvasRef?: RefObject<HTMLCanvasElement>
    protected ctx: CanvasRenderingContext2D | null = null

    get canvas (): HTMLCanvasElement | null {
        return this._canvasRef ? this._canvasRef.current : null
    }

    constructor (canvas: RefObject<HTMLCanvasElement>) {
        this._canvasRef = canvas
        window.addEventListener('resize', this.handleResize.bind(this))
        this.render()
    }

    mount () {
        this.handleResize()
        if (this.canvas) this.ctx = this.canvas.getContext('2d')
    }

    unmount () {
        
    }

    handleResize () {
        if (!this.canvas) return
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }

    render () {
        requestAnimationFrame(() => this.render())
        this.clearScreen()
        this.changes()
        this.draw()
    }

    clearScreen () {
        if (this.ctx) {
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        }
    }

    changes () {

    }

    draw () {

    }

}

export { BackgroundGenerator }