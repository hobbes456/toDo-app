import { sampleItem } from "./sampleItem";
import { createElementWithClass } from "./createElementWithClass";

export const createItem = item => {
    const li = createElementWithClass("li", "item");

    li.insertAdjacentHTML("afterbegin", sampleItem);

    const inputCheckbox = li.querySelector("#item-checkbox");
    const itemCheckbox = li.querySelector(".item__checkbox");
    const itemContent = li.querySelector(".item__content");

    inputCheckbox.id += `_${item.time}`;
    itemCheckbox.htmlFor += `_${item.time}`;

    itemContent.textContent = item.text;

    return li;
}   