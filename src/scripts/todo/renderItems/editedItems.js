export const editedItems = event => {
    const editedItem = event.target.closest(".item");

    editedItem.classList.add("item_edited");

    const itemContent = editedItem.querySelector(".item__content");
    const input = editedItem.querySelector(".item__edit input");

    input.value = itemContent.textContent;

    input.focus();
};
