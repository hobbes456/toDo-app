export const clearButtonEvent = states => {
    const itemsList = states.blocks.itemsList.childNodes;
    const items = states.items;

    itemsList.splice(
        0,
        itemsList.length,
        // ...itemsList.filter(item => item.classList.contains("item_completed"))
    );

    items.splice(
        0,
        items.length,
        ...items.filter(item => item.isCompleted === true)
    );
}