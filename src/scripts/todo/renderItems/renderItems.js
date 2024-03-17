import { createItem } from "./createItem";

export const renderItems = items => {
    return items.map(item => createItem(item));
}