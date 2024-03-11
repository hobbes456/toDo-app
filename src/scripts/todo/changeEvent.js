import { countItemsLeft } from "./countItemsLeft";

export const changeEvent = (e, items, itemsLeft) => {
    e.target.closest(".item").classList.toggle("item_completed");
    
    countItemsLeft(items, itemsLeft);
}