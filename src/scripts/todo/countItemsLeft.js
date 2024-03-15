export const countItemsLeft = (items, itemsLeft) => {
    let count = Array.from(items).filter(
        item => !item.classList.contains("item_completed")
    ).length;

    itemsLeft.textContent = 
        count === 1 ? `${count} item left` : `${count} items left`;
}