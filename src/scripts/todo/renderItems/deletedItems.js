export const deletedItems = (event, states) => {
    const deletedItem = event.target.closest(".item");

    states.items.splice(
        0,
        states.items.length,
        ...states.items.filter(item => item.time !== parseInt(deletedItem.id))
    );

    deletedItem.remove();
}