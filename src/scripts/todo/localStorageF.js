import { renderItems } from "./renderItems/renderItems";
import { toggleShow } from "./observedFunctions/toggleShow";

export const localStorageF = states => {
    const items = states.items;
    const itemsList = states.blocks.itemsList;

    window.onbeforeunload = () => {
        localStorage.setItem("states", JSON.stringify(states));
    };

    document.addEventListener("DOMContentLoaded", () => {
        if (!localStorage.getItem("states")) {
            return;
        }

        const pastStates = JSON.parse(localStorage.getItem("states"));
        const pastItems = pastStates.items.sort((a, b) => b.time - a.time);

        if (pastStates.isShow) {
            toggleShow(states);
        }

        items.push(...pastItems);

        itemsList.prepend(...renderItems(items));
    });
}