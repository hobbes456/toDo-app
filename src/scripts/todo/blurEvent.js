export const blurEvent = (e, itemEditInput, itemContent) => {
    if (itemEditInput.value.trim() === "") {
        itemEditInput.closest(".item").remove();
    } else {
        itemContent.textContent = itemEditInput.value;
    }

    e.target.closest(".item").classList.remove("item_edited");
}