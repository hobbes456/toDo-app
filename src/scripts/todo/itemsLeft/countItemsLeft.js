export const countItemsLeft = items => {
    return items.filter(item => !item.isCompleted).length;
}