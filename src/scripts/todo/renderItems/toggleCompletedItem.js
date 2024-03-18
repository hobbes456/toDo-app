import { states } from "../states";

const allItemsObjects = states.allItemsObjects;

export const toggleCompletedItem = event => {
    if (event.target.classList.contains("item__checkbox")) {
        const completedItem = event.target.closest(".item");

        completedItem.completed = !completedItem.completed;

        allItemsObjects
            .filter(item => item.time === parseInt(completedItem.id))
            .forEach(item => item.completed = !item.completed);
    }
}