import { states } from "./states";

import { contentShow } from "./contentShow";
import { countItemsLeft } from "./countItemsLeft";
import { newItemCreate } from "./newItemCreate";
import { filter } from "./filter";
import { localStorageF } from "./localStorage";

const itemsList = document.querySelector(".app__items-list");
const items = itemsList.children;

const content = document.querySelector(".app__content");
const toggleAllButton = content.querySelector("#toggle-all");

const footer = document.querySelector(".app__footer");
const itemsLeft = footer.querySelector(".app__items-left");
const buttons = footer.querySelector(".app__buttons");
const clearButton = footer.querySelector(".app__clear-button");

const textInput = document.querySelector(".app__header input");

const itemTemplate = document.getElementById("task-template").content.querySelector(".item");

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
    newItemCreate
        (textInput,
        states,
        toggleAllButton,
        itemTemplate,
        itemsList,
        items,
        itemsLeft,
        content,
        footer);

    contentShow(items, content, footer, states);
    countItemsLeft(items, itemsLeft);
    filter(items, states);
    }
);

itemsList.addEventListener("click", event => {
    if (items.length === 1) {
        states.toggleAllValid = !states.toggleAllValid;
    }

    if (event.target.className === "item__button") {
        event.target.closest(".item").remove();

        contentShow(items, content, footer, states);
        countItemsLeft(items, itemsLeft);
    }

    if (event.target.type === "checkbox") {
        setTimeout(() => {
            filter(items, states);
        }, 150);
    }
});

toggleAllButton.addEventListener("change", event => {
    if (items.length === 0) {
        event.target.checked = false;
    }

    let allCheckboxes = itemsList.querySelectorAll("input[type='checkbox']");
  
    if (event.target.checked) {
        for (let checkbox of allCheckboxes) {
            checkbox.checked = true;
            checkbox.closest(".item").classList.add("item_completed");
        }
    } else {
        for (let checkbox of allCheckboxes) {
            checkbox.checked = false;
            checkbox.closest(".item").classList.remove("item_completed");
        }
    }

    countItemsLeft(items, itemsLeft);
    filter(items, states);
});

buttons.addEventListener("click", event => {
    if (!event.target.classList.contains("app__button")) return;

    for (let button of buttons.children) {
        button.classList.remove("app__button_active");
    }

    event.target.classList.add("app__button_active");

    if (!event.target.href) return;

    states.filterSetting = event.target.href.split("#").pop();

    filter(items, states);
});

clearButton.addEventListener("click", () => {
    Array.from(items).map(item => {
        if (item.classList.contains("item_completed")) {
            item.remove();
        }
    });

    countItemsLeft(items, itemsLeft);
    contentShow(items, content, footer, states);
});

document.addEventListener("DOMContentLoaded", () => {
    localStorageF(itemsList, itemsLeft, content, footer, states);

    contentShow(items, content, footer, states);
    countItemsLeft(items, itemsLeft);
    filter(items, states);
});

window.onbeforeunload = () => {
    localStorage.setItem("content", itemsList.innerHTML);
};