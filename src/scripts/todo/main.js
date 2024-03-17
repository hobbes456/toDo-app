import { states } from "./states";
import { blocks } from "./blocks";
import { createItemObject } from "./createItemObject/createItemObject";
import {renderItems} from "./renderItems/renderItems";

const allItemsObjects = [];

blocks.textInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        blocks.textInput.blur();
        blocks.textInput.focus();
    }
    else if (event.key === "Escape") {
        blocks.textInput.value = "";
    }
});

blocks.textInput.addEventListener("blur", () => {
    const item = createItemObject(blocks.textInput.value);
    
    if(!item) {
        blocks.textInput.value = "";
        return;
    }
    
    allItemsObjects.push(item);

    allItemsObjects.length < 1 ?
        blocks.itemsList.prepend(...renderItems(allItemsObjects)) :
        blocks.itemsList.prepend(...renderItems([allItemsObjects[allItemsObjects.length - 1]]));

    blocks.textInput.value = "";
});