export const createElementWithClass = (element, setClass) => {
    const domElement = document.createElement(element);

    domElement.classList.add(setClass);

    return domElement;
}