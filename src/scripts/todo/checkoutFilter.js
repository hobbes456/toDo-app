export const checkoutFilter = ({target}) => {
    if (target.classList.contains("app__button")) {
        const buttons = target.closest(".app__buttons");

        Array.from(buttons.children).forEach(item => item.classList.remove("app__button_active"));

        target.classList.add("app__button_active");

        return target.href.split("#").pop();
    }
}