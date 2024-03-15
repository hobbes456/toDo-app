export const keydownEvent = (event, itemEditInput, itemContent) => {
    switch (event.key) {
        case "Enter":
            itemEditInput.blur();
        break;

        case "Escape":
            itemEditInput.value = itemContent.textContent;
            itemEditInput.blur();
        break;
    }
}