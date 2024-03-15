export const blurEvent = (event, itemEditInput, itemContent) => {
    if (itemEditInput.value.trim() === "") {
        itemEditInput.closest(".item").remove();
    } else {
        itemContent.textContent = itemEditInput.value;
    }

    event.target.closest(".item").classList.remove("item_edited");
}