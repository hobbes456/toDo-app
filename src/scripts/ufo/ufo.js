import { generateColor } from "./generateColor";
import { starsMoving } from "./starsMoving";

const ufoTable = document.querySelector(".ufo");
const appTitle = document.querySelector(".app__title");

let countForStart = 0;
let valid = true;

export const ufo = () => {
    ufoTable.addEventListener("click", () => {
        if (valid) {
            countForStart++;

            if (countForStart !== 5) return;

            valid = !valid;


            let timer = setInterval(() => {
                let color = generateColor();

                ufoTable.style.backgroundColor = color;
                appTitle.style.color = color;
            }, 600);

            const ufoWidth = parseInt(getComputedStyle(ufoTable).width);
            const ufoHeight = parseInt(getComputedStyle(ufoTable).height);

            window.addEventListener("click", e => {
                ufoTable.style.top = e.clientY - ufoHeight/2 + "px";
                ufoTable.style.left = e.clientX - ufoWidth/2 + "px";
            });

            setTimeout(() => {
                ufoTable.addEventListener("dblclick", () => {
                    clearInterval(timer);
    
                    ufoTable.style.zIndex = "-1";
                    ufoTable.style.opacity = "0";
                    ufoTable.style.cursor = "auto";

                    appTitle.style.color = "#C5D0E6";
                });
            }, 2000);
            
            document.body.classList.add("dark");

            starsMoving();
        }
    });
};