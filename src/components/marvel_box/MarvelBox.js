

export class MarvelBox {

    constructor(selector, { components }) {
        this.$selector = document.querySelector(selector)
        this.property = components

    }


    getRoot() {

        const $root = document.createElement('div')
        $root.classList.add('container')
        $root.classList.add('marvel_box')

        this.property.forEach( Component => {
            const component = new Component()
            $root.insertAdjacentHTML("beforeend", component.render())
        })

        return $root
    }

    render() {
         this.$selector.append(this.getRoot())
    }
}