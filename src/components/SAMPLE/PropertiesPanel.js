import Property from './Property'
import mousetrap from 'mousetrap'
import 'mousetrap-global-bind'

// Panel css
import './styles/PropertiesPanel.css'

// get elements fast function
const get = (query) => {
    return document.querySelectorAll(query)
}

class PropertiesPanel {
    constructor (nodesManage) {
        this.focusNode = null
        this.active = true
        // Define scene and panel
        this.nodesManage = nodesManage
        this.panel = {
            container: get('.panel')[0],
            header: get('.panel > .header')[0],
            icon: get('.panel > .header > i')[0],
            title: get('.panel > .header > span')[0],
            table: get('.panel > .table')[0]
        }
        // open and closing panel
        this.isOpen = false
        this.panel.container.style.height = `40px`
        this.panel.header.onclick = this.toggle.bind(this)
        mousetrap.bindGlobal('alt+space', e => {
            e.preventDefault()
            document.body.focus()
            this.toggle()
        })
        // reseting panel for first use
        this.panelProperties = []
        this.resetPanel()
    }
    toggle () {
        this.isOpen = !this.isOpen
        if (this.isOpen) {
            // openinng the panel
            this.panel.container.style.height = `${ this.panel.table.offsetHeight + 40 /* header height */ + 16 /* 8*2 = margins */ }px`
            const focusableProps = this.panelProperties.filter(prop => prop.options.type == 'text' || prop.options.type == 'number')
            if (focusableProps.length > 0 && this.isOpen) setTimeout (()=>{focusableProps[0].focus()}, 300)
        }
        else {
            // closing the panel
            this.panel.container.style.height = `40px`
        }
    }
    focus (node) {
        if (this.active) {
            this.panel.container.classList.remove('show')
            setTimeout(() => {
                this.resetPanel()
                this.addNodePropsItems(node)
                this.focusNode = node
                this.panel.container.classList.add('show')
                const focusableProps = this.panelProperties.filter(prop => prop.options.type == 'text' || prop.options.type == 'number')
                if (focusableProps.length > 0 && this.isOpen) focusableProps[0].focus()
            }, 300)
        }
    }
    activate () {
        this.active = true
    }
    deactivate () {
        this.active = false
        this.panel.container.classList.remove('show')
    }
    addNodePropsItems (node) {
        const props = node.props
        this.panel.title.innerHTML = props.text.value
        for (let property in props) {
            const { label, type, value, options } = props[ property ]
            this.addProperty(property, type, Object.assign({}, options, { label: label || property, value: value }), (prop, value) => {
                if (node['setProperty' + prop.capitalize()] !== undefined) node['setProperty' + prop.capitalize()](value)
            })
        }
    }
    getPropertyObject (prop) {
        for (let property of this.panelProperties) if (property.options.name === prop) return property
    }
    onPropSet (node, prop, value) {
        if (node === this.focusNode) {
            // Getting Property
            const property = this.getPropertyObject(prop) 
            // Check if value is number and has more than two precisions, fix it to two-precisions
            // if (typeof value === 'number') {
            //     console.log(prop, value)
            //     const precision = String(value).split(".")[1]
            //     if (precision !== undefined) if (precision.length > 2) value = value.toFixed(2)
            //     console.log('CHANGED TO', prop, value)
            // }
            // Setting Property to panel
            if (property !== undefined) property.setValue(value)
        }
    }
    resetPanel () {
        // freeing up memory
        for (let panelProperty of this.panelProperties) {
            panelProperty.destroy()
            panelProperty = null
        }
        this.panelProperties = []
        this.panel.table.innerHTML = ''
    }
    addProperty (name, type, options, onchange) {
        const prop = new Property(name, type, options, onchange)
        this.panelProperties.push(prop)
        this.panel.table.appendChild(prop.getElement())
        return prop
    }
}

export default PropertiesPanel