import { countItemsLeft } from "./countItemsLeft";

export const itemsLeftF = ({blocks, items}) => {
    const {itemsLeft} = blocks;

    const countLeft = countItemsLeft(items);

    countLeft === 1 ?
        itemsLeft.textContent = `${countLeft} item left` :
        itemsLeft.textContent = `${countLeft} items left`;
}