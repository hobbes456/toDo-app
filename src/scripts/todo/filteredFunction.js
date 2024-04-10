import { renderItems } from "./renderItems/renderItems";

export const filteredFunction = ({blocks, filter, items}) => {
    const itemsList = blocks.itemsList;

    Array.from(itemsList.childNodes).forEach((item) => item.remove());

    if (filter === "all") {
        itemsList.prepend(...renderItems(items));        
    }
    else {
        const filteredItems = items.filter(
            item => filter === "completed" ? item.isCompleted : !item.isCompleted
        );

        itemsList.prepend(...renderItems(filteredItems));
    }
}