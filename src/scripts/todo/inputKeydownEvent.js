export const inputKeydownEvent = (event, states) => {
    const textInput = states.blocks.textInput;
    const {key} = event;

    if (key === "Enter") {
        textInput.blur();
        textInput.focus();
    }
    
    if (key === "Escape") {
        textInput.value = "";
    }
}