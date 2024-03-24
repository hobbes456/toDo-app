export const states = {
    blocks: {
        header: document.querySelector(".app__header"),
        content: document.querySelector(".app__content"),
        footer: document.querySelector(".app__footer"),

        get textInput() {
            return this.header.querySelector("input");
        },

        get itemsList() {
            return this.content.querySelector(".app__items-list");
        },

        get itemsLeft() {
            return this.footer.querySelector("p");
        },

        get clearButton() {
            return this.footer.querySelector(".app__clear-button");
        }
    },

    items: [],

    isShow: false,
}