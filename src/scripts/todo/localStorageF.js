import { renderItems } from "./renderItems/renderItems";
import { toggleShow } from "./toggleShow";
import { filteredFunction } from "./filteredFunction";
import { itemsLeftF } from "./itemsLeft/itemsLeftF";

export const localStorageF = states => {
    const {itemsList, buttons} = states.blocks;
    const items = states.items;

    window.onbeforeunload = () => {
        localStorage.setItem("states", JSON.stringify(states));
    };

    document.addEventListener("DOMContentLoaded", () => {
        if (!localStorage.getItem("states")) return;

        const pastStates = JSON.parse(localStorage.getItem("states"));
        const pastItems = pastStates.items;

        states.filter = pastStates.filter;

        if (pastStates.isShow) toggleShow(states);

        items.unshift(...pastItems);

        itemsList.prepend(...renderItems(items));
        
        Array.from(buttons.children)
            .forEach(
                item => {
                    item.classList.remove("app__button_active");
                    
                    if (item.href.split("#").pop() === states.filter)
                        item.classList.add("app__button_active");
                }
            )

        itemsLeftF(states);

        filteredFunction(states);
    });
}