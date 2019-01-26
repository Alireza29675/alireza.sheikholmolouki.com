import { BackgroundGenerator } from './BackgroundGenerator'

class Grids extends BackgroundGenerator {

    protected state = {
        
    }

    changes () {
        if (!this.state) return
        
    }

    draw () {
        if (!this.state || !this.ctx) return

    }

}

export { Grids }