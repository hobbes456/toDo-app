import { renderItems } from "./renderItems/renderItems";

export const toggleAllEvent = states => {
    const {toggleAllInput, itemsList} = states.blocks;
    const items = states.items;

    items.map(item => {
        if (toggleAllInput.checked === true) {
            item.isCompleted = false;
        } else {
            item.isCompleted = true;
        }
    })

    Array.from(itemsList.childNodes).forEach(item => item.remove());

    itemsList.prepend(...renderItems(items));
}