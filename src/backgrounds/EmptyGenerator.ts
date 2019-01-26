import { BackgroundGenerator } from './BackgroundGenerator'

class EmptyGenerator extends BackgroundGenerator {

    protected state = {
        
    }

    changes () {
        if (!this.state) return
        
    }

    draw () {
        if (!this.state || !this.ctx) return

    }

}

export { EmptyGenerator }