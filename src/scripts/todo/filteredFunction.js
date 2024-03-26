export const filteredFunction = states => {
    const itemsList = states.blocks.itemsList;
    const filter = states.filter;

    Array.from(itemsList.childNodes).forEach(item => {
        item.style.display = "flex";

        if (filter === "active") {
            if (item.classList.contains("item_completed")) {
                item.style.display = "none";
            }
        }

        else if (filter === "completed") {
            if (!item.classList.contains("item_completed")) {
                item.style.display = "none"
            }
        }
    });
}