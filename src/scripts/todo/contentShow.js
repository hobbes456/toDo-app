export const contentShow = (items, content, footer, toggleAllValid) => {
    if (items.length === 0) {
        content.classList.remove("app__content_show");
        footer.classList.remove("app__footer_show");

        toggleAllValid = false;
    } else {
        content.classList.add("app__content_show");
        footer.classList.add("app__footer_show");
    }
}