export const doubleClickEvent = (e, itemEditInput, itemContent) => {
    e.target.closest(".item").classList.add("item_edited");

    itemEditInput.value = itemContent.textContent.trim();
    
    itemEditInput.focus();
}