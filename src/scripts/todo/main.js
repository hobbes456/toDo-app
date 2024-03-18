import { states } from "./states";
import { blocks } from "./blocks";
import { createItemObject } from "./createItemObject/createItemObject";
import { renderItems } from "./renderItems/renderItems";

const allItemsObjects = states.allItemsObjects;

const textInput = blocks.textInput;
const itemsList = blocks.itemsList;

textInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        textInput.blur();
        textInput.focus();
    }
    else if (event.key === "Escape") {
        textInput.value = "";
    }
});

textInput.addEventListener("blur", () => {
    const item = createItemObject(textInput.value);
    
    if(!item) {
        textInput.value = "";
        return;
    }
    
    allItemsObjects.push(item);

    allItemsObjects.length < 1 ?
        itemsList.prepend(...renderItems(allItemsObjects)) :
        itemsList.prepend(...renderItems([allItemsObjects[allItemsObjects.length - 1]]));

    textInput.value = "";
});

window.onbeforeunload = () => {
    localStorage.setItem("items", JSON.stringify(allItemsObjects));
};

document.addEventListener("DOMContentLoaded", () => {
    const prevItems = JSON.parse(localStorage.getItem("items"))
        .sort((a, b) => b.time - a.time);

    if(prevItems === false) {
        return;
    }
    
    allItemsObjects.push(...prevItems);

    itemsList.prepend(...renderItems(allItemsObjects));
});