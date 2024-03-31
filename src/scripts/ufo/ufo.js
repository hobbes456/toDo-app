import { states } from "./states";
import { generateColor } from "./generateColor";
import {createStars} from "./createStars";
import {deleteStars} from "./deleteStars";

const {blocks} = states;
const {ufo, title} = blocks;
let {countForStart, isShow} = states;

ufo.addEventListener("click", () => {
    if (!isShow) {
        countForStart--;

        if (countForStart === 0) {
            document.body.classList.add("ufo-active");

            createStars(400);

            isShow = !isShow;

            const timer = setInterval(() => { 
                let color = generateColor();
                
                blocks.setUfoColor(color);

                blocks.setTitleColor(color);
            }, 600);
    
            window.addEventListener("click", event => {
                blocks.setUfoPosition(event.pageX, event.pageY);
            });
    
            setTimeout(() => {
                ufo.addEventListener("dblclick", () => {
                    clearInterval(timer);
        
                    ufo.style.zIndex = "-1";
                    ufo.style.opacity = "0";
                    ufo.style.cursor = "auto";
    
                    title.style.color = "#C5D0E6";

                    document.body.classList.remove("ufo-active");

                    deleteStars();

                    setTimeout(() => {
                        ufo.remove();
                    }, 1000);
                });
            }, 2000);
        }
    }
});