export const countItemsLeft = itemsList => {
    let countCompleted = 0;

    itemsList.forEach(item => {
        if (item.isCompleted === true) {
            countCompleted++;
        }
    });

    return (itemsList.length - countCompleted);
}