export class Section {
    constructor({renderer}, containerSelector){
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    addItem (elementDOM) {
        this._containerSelector.prepend(elementDOM);
    }

    addItemServer (elementDOM) {
        this._containerSelector.append(elementDOM);
    }

    rendererOne (items) {
        items.forEach(item =>  this._renderer(item));
    }
}