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

            let timer = setInterval(() => {
                ufoTable.style.backgroundColor = generateColor();
            }, 600);

            const ufoWidth = parseInt(getComputedStyle(ufoTable).width);
            const ufoHeight = parseInt(getComputedStyle(ufoTable).height);

            window.addEventListener("click", e => {
                ufoTable.style.top = e.clientY - ufoHeight/2 + "px";
                ufoTable.style.left = e.clientX - ufoWidth/2 + "px";
            });

            if (!valid) {
                ufoTable.addEventListener("dblclick", () => {
                    clearInterval(timer);
    
                    ufoTable.style.opacity = "0";
                    ufoTable.style.cursor = "auto";
                });
                
                setTimeout(() => {
                    ufoTable.removeEventListener("dblclick", () => {
                        clearInterval(timer);
        
                        ufoTable.style.opacity = "0";
                        ufoTable.style.cursor = "auto";
                    });
    
                    window.removeEventListener("click", e => {
                        ufoTable.style.top = e.clientY - ufoHeight / 2 + "px";
                        ufoTable.style.left = e.clientX - ufoWidth / 2 + "px";
                    });
                }, 2000);
            }

            document.body.classList.add("dark");

            animateRain();
        }
    });
};