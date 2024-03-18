import { states } from "../states";

const allItemsObjects = states.allItemsObjects;

export const destroyItem = event => {
    if(event.target.classList.contains("item__button")) {
        const deletedItem = event.target.closest(".item");

        allItemsObjects.splice(
            0,
            allItemsObjects.length,
            ...allItemsObjects.filter(item => item.time !== parseInt(deletedItem.id))
        );

        deletedItem.remove();
    }
}