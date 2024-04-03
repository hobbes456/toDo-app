import { toggleShow } from "./toggleShow";
import { countItemsLeft } from "./countItemsLeft";
import { filteredFunction } from "../filteredFunction";

export const observerFunction = target => {
    const {toggleAllInput, toggleAllButton, itemsList, itemsLeft} = target.blocks;

    const observer = new MutationObserver(MutationRecord => {
        const recordLength = MutationRecord[0].target.childNodes.length;

        let countLeft = countItemsLeft(itemsList.childNodes);

        if (
            (!target.isShow && recordLength === 1)
            ||
            (target.isShow && recordLength === 0)) {
            toggleShow(target);
        }

        if (recordLength === 0) {
            toggleAllInput.checked = false;
        }

        countLeft === 0 ?
            toggleAllButton.classList.add("app__toggle-all_completed") :
            toggleAllButton.classList.remove("app__toggle-all_completed");

        countLeft === 1 ?
            itemsLeft.textContent = `${countLeft} item left` :
            itemsLeft.textContent = `${countLeft} items left`;

        filteredFunction(target);
    });

    observer.observe(itemsList, {
        childList: true,
        subtree: true,
        attributeFilter: ["class"]
    });
}