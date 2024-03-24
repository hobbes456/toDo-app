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

    items.push(item);

    items.length < 1
        ? itemsList.prepend(...renderItems(items))
        : itemsList.prepend(...renderItems([items[items.length - 1]]));

    textInput.value = "";
}