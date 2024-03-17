import { isNotVoid } from "./isNotVoid";
import { Item } from "./item"

export const createItemObject = text => {
    if(isNotVoid(text)) {
        return new Item(text);
    }
}