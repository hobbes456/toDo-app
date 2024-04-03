import { renderItems } from "./renderItems/renderItems";

export const toggleAllEvent = ({blocks, items}) => {
    const {toggleAllInput, itemsList} = blocks;

    items.map(item => {
        item.isCompleted = toggleAllInput.checked ? false : true;
    })

    Array.from(itemsList.childNodes).forEach(item => item.remove());

    itemsList.prepend(...renderItems(items));
}