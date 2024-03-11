export const countItemsLeft = (items, itemsLeft) => {
    let count = 0;

    for (let item of items) {
        if(item.classList.contains("item_completed")) {
            count++;
        }
    }

    let itemsCount = items.length - count;

    itemsLeft.textContent = 
        itemsCount === 1 ? `${itemsCount} item left` : `${itemsCount} items left`;
}