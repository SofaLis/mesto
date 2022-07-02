export class Section {
    constructor({items, renderer}, containerSelector){
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    }

    addItem (elementDOM) {
        this._containerSelector.prepend(elementDOM);
    }

    rendererOne () {
        this._items.forEach(item =>  this._renderer(item));
    }
}