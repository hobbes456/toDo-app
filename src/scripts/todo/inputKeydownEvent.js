export const inputKeydownEvent = ({key}, {blocks}) => {
    const textInput = blocks.textInput;

    if (key === "Enter") {
        textInput.blur();
        textInput.focus();
    }
    
    if (key === "Escape") textInput.value = "";
}