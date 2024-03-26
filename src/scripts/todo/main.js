import { states } from "./states";
import { observerFunction } from "./observedFunctions/observerFunction";
import { inputKeydownEvent } from "./inputKeydownEvent";
import { blurEvent } from "./blurEvent";
import { toggleAllEvent } from "./toggleAllEvent";
import { checkoutFilter } from "./checkoutFilter";
import { filteredFunction } from "./filteredFunction";
import { clearButtonEvent } from "./clearButtonEvent";
import { localStorageF } from "./localStorageF";

const {textInput, toggleAllButton, buttons, clearButton} = states.blocks;

observerFunction(states);

textInput.addEventListener("keydown", event => {
   inputKeydownEvent(event, states);
});

textInput.addEventListener("blur", () => {
    blurEvent(states);
});

toggleAllButton.addEventListener("click", () => {
    toggleAllEvent(states);
});

buttons.addEventListener("click", event => {
    states.filter = checkoutFilter(event);
    
    filteredFunction(states);
})

clearButton.addEventListener("click", () => {
    clearButtonEvent(states);
});

localStorageF(states);