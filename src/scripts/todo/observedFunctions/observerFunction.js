import { toggleShow } from "./toggleShow";
import { countItemsLeft } from "./countItemsLeft";

export const observerFunction = target => {
    const {itemsList, itemsLeft} = target.blocks;

    const observer = new MutationObserver(MutationRecord => {
        const recordLength = MutationRecord[0].target.childNodes.length;

        if (
            (target.isShow === false && recordLength === 1)
            ||
            (target.isShow === true && recordLength === 0)) {
            toggleShow(target);
        }

        itemsLeft.textContent = countItemsLeft(itemsList.childNodes);
    });

    observer.observe(itemsList, {
        childList: true,
        subtree: true,
        attributeFilter: ["class"]
    });
}