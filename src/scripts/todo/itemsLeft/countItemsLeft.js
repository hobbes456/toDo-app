export const countItemsLeft = items => {
    let countCompleted = 0;

    items.forEach(item => {
        if (item.isCompleted) countCompleted++;
    });

    return (items.length - countCompleted);
}