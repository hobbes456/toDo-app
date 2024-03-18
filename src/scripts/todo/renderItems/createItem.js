import { sampleItem } from "./sampleItem";
import { createElementWithClass } from "./createElementWithClass";
import { destroyItem } from "./destroyItem";
import { toggleCompletedItem } from "./toggleCompletedItem";

export const createItem = item => {
    const li = createElementWithClass("li", "item");
    
    li.id = item.time;
    li.completed = item.completed;

    
    li.insertAdjacentHTML("afterbegin", sampleItem);
    
    const inputCheckbox = li.querySelector("#item-checkbox");
    const itemCheckbox = li.querySelector(".item__checkbox");
    const itemContent = li.querySelector(".item__content");
    const itemButton = li.querySelector(".item__button");
    
    if (li.completed) {
        inputCheckbox.checked = true;
    }

    inputCheckbox.id += `_${item.time}`;
    itemCheckbox.htmlFor += `_${item.time}`;

    itemContent.textContent = item.text;

    itemCheckbox.addEventListener("click", event => {
        toggleCompletedItem(event);
    });

    itemButton.addEventListener("click", event => {
        destroyItem(event);
    });

    return li;
}   