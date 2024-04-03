import { Item } from "./item"

export const createItemObject = text => {
    if(text.trim()) return new Item(text);
}