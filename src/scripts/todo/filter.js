export const filter = (items, states) => {

    Array.from(items).forEach(item => item.style.display = "flex");

    switch (states.filterSetting) {
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
