import { animateRain } from "./rain";

const ufoTable = document.querySelector(".ufo");

let countForStart = 0;
let valid = true;

function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export const ufo = () => {
    ufoTable.addEventListener("click", () => {
        if (valid) {
            countForStart++;

            if (countForStart !== 5) return;

            valid = !valid;

            setInterval(() => {
                ufoTable.style.backgroundColor = generateColor();
            }, 600);

            const ufoWidth = parseInt(getComputedStyle(ufoTable).width);
            const ufoHeight = parseInt(getComputedStyle(ufoTable).height);

            window.onclick = e => {
                ufoTable.style.top = e.clientY - ufoHeight/2 + "px";
                ufoTable.style.left = e.clientX - ufoWidth/2 + "px";
            }

            document.body.style.background = "#000010";

            animateRain();
        }
    });
};