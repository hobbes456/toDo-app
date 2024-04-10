import { renderItems } from "./renderItems/renderItems";

export const toggleAllEvent = ({blocks, items}) => {
    const {itemsList} = blocks;

    items.map(item => {
        item.isCompleted = true;
    })

    Array.from(itemsList.childNodes).forEach(item => item.remove());

    itemsList.prepend(...renderItems(items));
}