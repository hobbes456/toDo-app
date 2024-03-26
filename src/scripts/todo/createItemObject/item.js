export class Item {
    constructor(text) {
        this.isCompleted = false;
        this.text = text;
        this.time = Date.now();
        this.date = new Date();
    }
}