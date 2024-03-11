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

let toggleAllValid = false;
let filterSetting = "all";

textInput.addEventListener("blur", () => {
    newItemCreate
        (textInput,
        toggleAllValid,
        toggleAllButton,
        itemTemplate,
        itemsList,
        items,
        itemsLeft);

    contentShow(items, content, footer, toggleAllValid);
    countItemsLeft(items, itemsLeft);
    filter(items, filterSetting);
}
);

textInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        newItemCreate(
            textInput,
            toggleAllValid,
            toggleAllButton,
            itemTemplate,
            itemsList,
            items,
            itemsLeft
        );
        
        contentShow(items, content, footer, toggleAllValid);
        countItemsLeft(items, itemsLeft);
        filter(items, filterSetting);
    }
});

itemsList.addEventListener("click", e => {
    if (items.length === 1) {
        toggleAllValid = !toggleAllValid;
    }

    if (e.target.className === "item__button") {
        e.target.closest(".item").remove();

        contentShow(items, content, footer, toggleAllValid);
        countItemsLeft(items, itemsLeft);
    }

    if (e.target.type === "checkbox") {
        setTimeout(() => {
            filter(items, filterSetting);
        }, 150);
    }
});

toggleAllButton.addEventListener("change", e => {
    if (items.length === 0) {
        e.target.checked = false;
    }

    let allCheckboxes = itemsList.querySelectorAll("input[type='checkbox']");
  
    if (e.target.checked) {
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
    filter(items, filterSetting);
});

buttons.addEventListener("click", e => {
    if (!e.target.classList.contains("app__button")) return;

    for (let button of buttons.children) {
        button.classList.remove("app__button_active");
    }

    e.target.classList.add("app__button_active");

    if (!e.target.href) return;

    filterSetting = e.target.href.split("#").pop();

    filter(items, filterSetting);
});

clearButton.addEventListener("click", () => {
    Array.from(items).map(item => {
        if (item.classList.contains("item_completed")) {
            item.remove();
        }
    });

    countItemsLeft(items, itemsLeft);
    contentShow(items, content, footer, toggleAllValid);
});

document.addEventListener("DOMContentLoaded", () => {
    localStorageF(itemsList, itemsLeft);

    contentShow(items, content, footer, toggleAllValid);
    countItemsLeft(items, itemsLeft);
    filter(items, filterSetting);
});

window.onbeforeunload = () => {
    localStorage.setItem("content", itemsList.innerHTML);
};

// ufo();