import { renderItems } from "./renderItems/renderItems";
import { createItemObject } from "./createItemObject/createItemObject";

export const blurEvent = states => {
    const {textInput, itemsList} = states.blocks;
    const items = states.items;

    const item = createItemObject(textInput.value);

    if (!item) {
        textInput.value = "";
        return;
    }

    items.unshift(item);

    itemsList.prepend(...renderItems([items[0]]));

    textInput.value = "";
}