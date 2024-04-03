export const deletedItems = ({target}, states) => {
    const deletedItem = target.closest(".item");

    states.items.splice(
        0,
        states.items.length,
        ...states.items.filter(item => item.time !== parseInt(deletedItem.id))
    );

    deletedItem.remove();
}