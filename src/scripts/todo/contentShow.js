export const contentShow = (items, content, footer, states) => {
    if (items.length === 0) {
        content.classList.remove("app__content_show");
        footer.classList.remove("app__footer_show");

        states.toggleAllValid = false;
    } else {
        content.classList.add("app__content_show");
        footer.classList.add("app__footer_show");
    }
}