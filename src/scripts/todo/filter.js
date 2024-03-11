export const filter = (items, filterSetting) => {
    for (let item of items) {
        item.style.display = "flex";
    }

    switch (filterSetting) {
        case "active":
            for (let item of items) {
                if (item.classList.contains("item_completed")) {
                    item.style.display = "none";
                }
            }
        break;

        case "completed":
            for (let item of items) {
                if (!item.classList.contains("item_completed")) {
                    item.style.display = "none";
                }
            }
        break;
    }
};
