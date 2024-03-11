import "./styles/loader.scss";

window.addEventListener("load", () => {
    const loadingElement = document.querySelector("#app-loading");
    const main = document.querySelector(".main");

    setTimeout(() => {
        main.style.display = "flex";
        loadingElement.style.display = "none";
    }, 300);
});