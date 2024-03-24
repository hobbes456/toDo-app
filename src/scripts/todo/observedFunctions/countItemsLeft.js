export const countItemsLeft = itemsList => {
    let countCompleted = 0;
    let text = "";

    itemsList.forEach(item => {
        if (item.isCompleted === true) {
            countCompleted++;
        }
    });

    (itemsList.length - countCompleted) === 1 ?
        text = `${itemsList.length - countCompleted} item left` :
        text = `${itemsList.length - countCompleted} items left`;

    return text;
}