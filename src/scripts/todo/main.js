import { states } from "./states";
import { inputKeydownEvent } from "./inputKeydownEvent";
import { addItems } from "./addItems";
import { toggleShow } from "./toggleShow";
import { itemsLeftF } from "./itemsLeft/itemsLeftF";
import { toggleAllEvent } from "./toggleAllEvent";
import { checkoutFilter } from "./checkoutFilter";
import { filteredFunction } from "./filteredFunction";
import { delay500 } from "./delay500";
import { clearButtonEvent } from "./clearButtonEvent";
import { localStorageF } from "./localStorageF";

const {textInput, toggleAllButton, buttons, clearButton} = states.blocks;

textInput.addEventListener("keydown", event => {
   inputKeydownEvent(event, states);
});

textInput.addEventListener("blur", () => {
    addItems(states);

    itemsLeftF(states);

    delay500(filteredFunction, states);

    if (!states.isShow && states.items.length === 1) toggleShow(states);
});

toggleAllButton.addEventListener("click", () => {
    toggleAllEvent(states);

    itemsLeftF(states);

    delay500(filteredFunction, states);
});

buttons.addEventListener("click", event => {
    states.filter = checkoutFilter(event);
    
    filteredFunction(states);
})

clearButton.addEventListener("click", () => {
    clearButtonEvent(states);

    itemsLeftF(states);

    filteredFunction(states);

    if (states.isShow && states.items.length === 0) toggleShow(states);
});

localStorageF(states);