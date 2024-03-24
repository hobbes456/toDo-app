import { states } from "./states";
import { observerFunction } from "./observedFunctions/observerFunction";
import { inputKeydownEvent } from "./inputKeydownEvent";
import { blurEvent } from "./blurEvent";
import { clearButtonEvent } from "./clearButtonEvent";
import { localStorageF } from "./localStorageF";

const {textInput, clearButton} = states.blocks;

observerFunction(states);

textInput.addEventListener("keydown", event => {
   inputKeydownEvent(event, states);
});

textInput.addEventListener("blur", () => {
    blurEvent(states);
});

// clearButton.addEventListener("click", () => {
//     clearButtonEvent(states);
// });

localStorageF(states);