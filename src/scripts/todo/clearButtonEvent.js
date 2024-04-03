import { renderItems } from "./renderItems/renderItems";

export const clearButtonEvent = ({items, blocks}) => {
    const itemsList = blocks.itemsList;
    
    items.splice(
        0,
        items.length,
        ...items.filter(item => !item.isCompleted)
    );

    Array.from(itemsList.childNodes).forEach(item => item.remove());

    itemsList.prepend(...renderItems(items));
}