export const doubleClickEvent = (event, itemEditInput, itemContent) => {
    event.target.closest(".item").classList.add("item_edited");

    itemEditInput.value = itemContent.textContent.trim();
    
    itemEditInput.focus();
}