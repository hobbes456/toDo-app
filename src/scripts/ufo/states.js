export const states = {
    blocks: {
        ufo: document.querySelector(".ufo"),
        
        title: document.querySelector(".app__title"),

        setUfoColor(color) {
            this.ufo.style.backgroundColor = color;
        },

        setUfoPosition(x, y) {
            const ufoWidth = parseInt(getComputedStyle(this.ufo).width);
            const ufoHeight = parseInt(getComputedStyle(this.ufo).height);

            this.ufo.style.left = x - ufoWidth/2 + "px";
            this.ufo.style.top = y - ufoHeight/2 + "px";
        },

        setTitleColor(color) {
            this.title.style.color = color;
        }
    },

    countForStart: 5,

    isShow: false
}