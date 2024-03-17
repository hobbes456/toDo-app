export const blocks = {
    header: document.querySelector(".app__header"),
    content: document.querySelector(".app__content"),
    footer: document.querySelector(".app__footer"),

    get textInput() {
        return this.header.querySelector("input");
    },

    get itemsList() {
        return this.content.querySelector(".app__items-list");
    }
}