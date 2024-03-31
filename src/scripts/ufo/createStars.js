import {createElementWithClass} from "../todo/renderItems/createElementWithClass";

export const createStars = number => {
    const stars = createElementWithClass("div", "stars");

    document.body.append(stars);

    for (let index = 0; index < number; index++) {
        const star = createElementWithClass("div", "stars__star");

        stars.append(star);
    }
}   