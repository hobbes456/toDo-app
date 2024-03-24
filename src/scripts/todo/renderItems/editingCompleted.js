export const editingCompleted = (event, states) => {
    const target = event.target;
    const editedItem = target.closest(".item");

    if (target.value.trim() === "") {
        states.items.splice(
            0,
            states.items.length,
            ...states.items.filter(item => item.time !== parseInt(editedItem.id))
        );

        editedItem.remove();
    } else {
        const itemContent = editedItem.querySelector(".item__content");

        itemContent.textContent = target.value;

        states.items
            .find(item => item.time === parseInt(editedItem.id))
            .text = target.value;
    }

    editedItem.classList.remove("item_edited");
}