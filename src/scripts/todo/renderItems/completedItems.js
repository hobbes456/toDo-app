export const completedItems = ({target}, {items}) => {
    const completedItem = target.closest(".item");

    completedItem.classList.toggle("item_completed");
    completedItem.isCompleted = !completedItem.isCompleted;

    items
        .filter(item => item.time === parseInt(completedItem.id))
        .forEach(item => item.isCompleted = !item.isCompleted);
}