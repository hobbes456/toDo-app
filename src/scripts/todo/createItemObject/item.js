export class Item {
    constructor(text) {
        this.completed = false;
        this.text = text;
        this.time = Date.now();
    }
}