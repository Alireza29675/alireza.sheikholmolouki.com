import { BackgroundGenerator } from '../BackgroundGenerator'

class Generator extends BackgroundGenerator {

    protected state = {
        
    }

    changes () {
        if (!this.state) return
        
    }

    draw () {
        if (!this.state || !this.ctx) return
        
    }

}

export default Generator