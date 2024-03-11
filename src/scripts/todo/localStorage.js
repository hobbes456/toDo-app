import { doubleClickEvent } from "./doubleClickEvent";
import { blurEvent } from "./blurEvent";
import { keydownEvent } from "./keydownEvent";
import { changeEvent } from "./changeEvent";

export const localStorageF = (itemsList, itemsLeft) => {
    if (localStorage.getItem("content")) {
        itemsList.innerHTML = localStorage.getItem("content");

        for (let item of itemsList.children) {
            if (item.classList.contains("item_completed")) {
                item.querySelector("input[type='checkbox']").checked = true;
            }

            let itemEditInput = item.querySelector(".item__edit input");
            let itemContent = item.querySelector(".item__content");
            let inputCheckbox = item.querySelector("input[type='checkbox']");

            itemContent.addEventListener("dblclick", e => {
                doubleClickEvent(e, itemEditInput, itemContent);
            });

            itemEditInput.addEventListener("blur", e => {
                blurEvent(e, itemEditInput, itemContent);
            });

            itemEditInput.addEventListener("keydown", e => {
                keydownEvent(e, itemEditInput);
            });

            inputCheckbox.addEventListener("change", e => {
                changeEvent(e, itemsList.children, itemsLeft);
            });
        }
    } else {
        console.log("localStorage пуст!");
    }
}