import { renderItems } from "./renderItems/renderItems";

export const clearButtonEvent = states => {
    const itemsList = states.blocks.itemsList;
    const items = states.items;

    items.splice(
        0,
        items.length,
        ...items.filter(item => item.isCompleted !== true)
    );

    Array.from(itemsList.childNodes).forEach(item => item.remove());

    itemsList.prepend(...renderItems(items));
}