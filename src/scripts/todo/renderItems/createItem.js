import { states } from "../states";
import { sampleItem } from "./sampleItem";
import { createElementWithClass } from "./createElementWithClass";
import { deletedItems } from "./deletedItems";
import { completedItems } from "./completedItems";
import { editedItems } from "./editedItems";
import { editingCompleted } from "./editingCompleted";
import { keydownEvent } from "./keydownEvent";
import { toggleShow } from "../toggleShow";
import { itemsLeftF } from "../itemsLeft/itemsLeftF";

export const createItem = item => {
    const li = createElementWithClass("li", "item");
    
    li.id = item.time;
    li.isCompleted = item.isCompleted;
    
    li.insertAdjacentHTML("afterbegin", sampleItem);
    
    const inputCheckbox = li.querySelector("#item-checkbox");
    const itemCheckbox = li.querySelector(".item__checkbox");
    const itemContent = li.querySelector(".item__content");
    const itemButton = li.querySelector(".item__button");
    const itemEditInput = li.querySelector(".item__edit input");
    
    if (li.isCompleted) {
        li.classList.add("item_completed")

        inputCheckbox.checked = true;
    }

    inputCheckbox.id += `_${item.time}`;
    itemCheckbox.htmlFor += `_${item.time}`;

    itemContent.textContent = item.text;

    itemCheckbox.addEventListener("click", event => {
        completedItems(event, states);

        itemsLeftF(states);
    });

    itemContent.addEventListener("dblclick", event => {
        editedItems(event);
    })

    itemButton.addEventListener("click", event => {
        deletedItems(event, states);

        itemsLeftF(states);

        if (states.isShow && states.items.length === 0) toggleShow(states);
    });

    itemEditInput.addEventListener("blur", event => {
        editingCompleted(event, states);

        itemsLeftF(states);

        if (states.isShow && states.items.length === 0) toggleShow(states);
    })

    itemEditInput.addEventListener("keydown", event => {
        keydownEvent(event);
    })

    return li;
}   