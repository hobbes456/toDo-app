export const completedItems = (event, states) => {
    const completedItem = event.target.closest(".item");

    completedItem.classList.toggle("item_completed");
    completedItem.isCompleted = !completedItem.isCompleted;

    states.items
        .filter(item => item.time === parseInt(completedItem.id))
        .forEach(item => item.isCompleted = !item.isCompleted);
}