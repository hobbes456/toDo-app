import { animateRain } from "./rain";

const ufoTable = document.querySelector(".ufo");

let countForStart = 0;

const ufoWidth = parseInt(getComputedStyle(ufoTable).width);
const ufoHeight = parseInt(getComputedStyle(ufoTable).height);

function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export const ufo = () => {
    ufoTable.addEventListener("click", () => {
        countForStart++;

        if (countForStart !== 5) return;

        let timer = setInterval(() => {
            ufoTable.style.backgroundColor = generateColor();
        }, 600);

        window.addEventListener("click", e => {
            ufoTable.style.top = e.clientY - ufoHeight / 2 + "px";
            ufoTable.style.left = e.clientX - ufoWidth / 2 + "px";
        });

        setTimeout(() => {
            ufoTable.addEventListener("dblclick", () => {
                clearInterval(timer);

                ufoTable.style.opacity = "0";
                ufoTable.style.cursor = "auto";

                setTimeout(() => {
                    ufoTable.style.display = "none";
                }, 2000);
            });
        }, 5000);

        document.body.classList.add("dark");

        animateRain();
    });
};