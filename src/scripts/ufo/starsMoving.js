const canvas = document.getElementsByClassName("stars")[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function randomNum(max, min) {
	return Math.floor(Math.random() * max) + min;
}

function Stars(x, y, endy, velocity, opacity) {

	this.x = x;
	this.y = y;
	this.endy = endy;
	this.velocity = velocity;
	this.opacity = opacity;

	this.draw = function() {
		c.beginPath();
		c.moveTo(this.x, this.y);
		c.lineTo(this.x, this.y - this.endy);
		c.lineWidth = 1;
		c.strokeStyle= "rgba(255, 255, 255, " + this.opacity + ")";
		c.stroke();
	}

	this.update = function() {
		let starsEnd = window.innerHeight + 100;
		if (this.y >= starsEnd) {
			this.y = this.endy - 100;
		} else {
			this.y = this.y + this.velocity;
		}
		this.draw();
	}
}

const starsArray = [];

for (let i = 0; i < 500; i++) {
	let starsXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
	let starsYLocation = Math.random() * -500;
	let randomStarsHeight = randomNum(10, 2);
	let randomSpeed = randomNum(20, .2);
	let randomOpacity = Math.random() * .55;
	starsArray.push(new Stars(starsXLocation, starsYLocation, randomStarsHeight, randomSpeed, randomOpacity));
}

export function starsMoving() {
	requestAnimationFrame(starsMoving);
	c.clearRect(0,0, window.innerWidth, window.innerHeight);

	for (let i = 0; i < starsArray.length; i++) {
		starsArray[i].update();
	}
}