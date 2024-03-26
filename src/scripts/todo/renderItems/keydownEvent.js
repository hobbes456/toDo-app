export const keydownEvent = event => {
    const {key, target} = event;

    if (key === "Enter") {
        target.blur();
    }

    if (key === "Escape") {
        const itemContent = target.closest(".item")
            .querySelector(".item__content");

        target.value = itemContent.textContent;
        target.blur();
    }
}