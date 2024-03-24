export const inputKeydownEvent = (event, states) => {
    const textInput = states.blocks.textInput;

    if (event.key === "Enter") {
        textInput.blur();
        textInput.focus();
    }
    
    if (event.key === "Escape") {
        textInput.value = "";
    }
}