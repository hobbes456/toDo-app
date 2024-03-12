export const keydownEvent = (e, itemEditInput, itemContent) => {
    switch (e.key) {
        case "Enter":
            itemEditInput.blur();
        break;

        case "Escape":
            itemEditInput.value = itemContent.textContent;
            itemEditInput.blur();
        break;
    }
}