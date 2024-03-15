import { doubleClickEvent } from "./doubleClickEvent";
import { blurEvent } from "./blurEvent";
import { keydownEvent } from "./keydownEvent";
import { changeEvent } from "./changeEvent";
import { countItemsLeft } from "./countItemsLeft";
import { contentShow } from "./contentShow";

export const newItemCreate = (textInput, states, toggleAllButton, itemTemplate, itemsList, items, itemsLeft, content, footer) => {
    if (textInput.value.trim() === "") return;

    if (!states.toggleAllValid) {
        toggleAllButton.checked = states.toggleAllValid;
        states.toggleAllValid = !states.toggleAllValid;
    }

    const newItem = itemTemplate.cloneNode(true);
    const itemContent = newItem.querySelector(".item__content");
    const itemCheckbox = newItem.querySelector("input[type='checkbox']");
    const itemForCheckbox = newItem.querySelector(".item__checkbox");
    const itemEditInput = newItem.querySelector(".item__edit input");

    const id = Date.now();

    itemContent.textContent = textInput.value.trim();
    itemCheckbox.id += "_" + id;
    itemForCheckbox.htmlFor += "_" + id;

    itemContent.addEventListener("dblclick", event => {
        doubleClickEvent(event, itemEditInput, itemContent);
    })

    itemEditInput.addEventListener("blur", event => {
        blurEvent(event, itemEditInput, itemContent);

        countItemsLeft(items, itemsLeft);
        contentShow(items, content, footer, states);
    })

    itemEditInput.addEventListener("keydown", event => {
        keydownEvent(event, itemEditInput, itemContent);
    });

    itemCheckbox.addEventListener("change", event => {
        changeEvent(event, items, itemsLeft);
    })

    itemsList.prepend(newItem);

    textInput.value = "";
}