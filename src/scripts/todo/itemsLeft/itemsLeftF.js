import { countItemsLeft } from "./countItemsLeft";

export const itemsLeftF = ({blocks, items}) => {
    const {itemsLeft} = blocks;

    const countLeft = countItemsLeft(items);

    itemsLeft.textContent = `${countLeft} ${countLeft === 1 ? "item" : "items"} left`;
}