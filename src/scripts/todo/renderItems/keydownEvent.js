export const keydownEvent = event => {
    if (event.key === "Enter") {
        event.target.blur();
    }

    if (event.key === "Escape") {
        const itemContent = event.target.closest(".item")
            .querySelector(".item__content");

        event.target.value = itemContent.textContent;
        event.target.blur();
    }
}