import { doubleClickEvent } from "./doubleClickEvent";
import { blurEvent } from "./blurEvent";
import { keydownEvent } from "./keydownEvent";
import { changeEvent } from "./changeEvent";
import { countItemsLeft } from "./countItemsLeft";
import { contentShow } from "./contentShow";

export const newItemCreate = (textInput, toggleAllValid, toggleAllButton, itemTemplate, itemsList, items, itemsLeft, content, footer) => {
    if (textInput.value.trim() === "") return;

    if (!toggleAllValid) {
        toggleAllButton.checked = toggleAllValid;
        toggleAllValid = !toggleAllValid;
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

    itemContent.addEventListener("dblclick", e => {
        doubleClickEvent(e, itemEditInput, itemContent);
    })

    itemEditInput.addEventListener("blur", e => {
        blurEvent(e, itemEditInput, itemContent);

        countItemsLeft(items, itemsLeft);
        contentShow(items, content, footer, toggleAllValid);
    })

    itemEditInput.addEventListener("keydown", e => {
        keydownEvent(e, itemEditInput, itemContent);
    });

    itemCheckbox.addEventListener("change", e => {
        changeEvent(e, items, itemsLeft);
    })

    itemsList.prepend(newItem);

    textInput.value = "";
}