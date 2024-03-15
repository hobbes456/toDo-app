import { doubleClickEvent } from "./doubleClickEvent";
import { blurEvent } from "./blurEvent";
import { keydownEvent } from "./keydownEvent";
import { changeEvent } from "./changeEvent";
import { countItemsLeft } from "./countItemsLeft";
import { contentShow } from "./contentShow";

export const localStorageF = (itemsList, itemsLeft, content, footer, states) => {
    if (localStorage.getItem("content")) {
        itemsList.innerHTML = localStorage.getItem("content");

        for (let item of itemsList.children) {
            if (item.classList.contains("item_completed")) {
                item.querySelector("input[type='checkbox']").checked = true;
            }

            let itemEditInput = item.querySelector(".item__edit input");
            let itemContent = item.querySelector(".item__content");
            let inputCheckbox = item.querySelector("input[type='checkbox']");

            itemContent.addEventListener("dblclick", event => {
                doubleClickEvent(event, itemEditInput, itemContent);
            });

            itemEditInput.addEventListener("blur", event => {
                blurEvent(event, itemEditInput, itemContent);

                countItemsLeft(itemsList.children, itemsLeft);
                contentShow(
                    itemsList.children,
                    content,
                    footer,
                    states
                );
            });

            itemEditInput.addEventListener("keydown", event => {
                keydownEvent(event, itemEditInput, itemContent);
            });

            inputCheckbox.addEventListener("change", event => {
                changeEvent(event, itemsList.children, itemsLeft);
            });
        }
    } else {
        console.log("localStorage пуст!");
    }
}