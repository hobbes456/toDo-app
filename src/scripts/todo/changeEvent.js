import { countItemsLeft } from "./countItemsLeft";

export const changeEvent = (event, items, itemsLeft) => {
    event.target.closest(".item").classList.toggle("item_completed");
    
    countItemsLeft(items, itemsLeft);
}