export const countItemsLeft = itemsList => {
    let countCompleted = 0;

    itemsList.forEach(item => {
        if (item.isCompleted) countCompleted++;
    });

    return (itemsList.length - countCompleted);
}