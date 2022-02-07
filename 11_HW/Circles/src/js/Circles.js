//removeIf(production)
const {randomNumber} = require('./utils')

//endRemoveIf(production)


class Circles {
    constructor(context, R, speed, x, y) {
        this.context = context;
        this.R = R;
        this.speedX = speed;
        this.speedY = speed;
        if (randomNumber(-1, 1) === -1)
            this.speedX = this.speedX * (-1);
        if (randomNumber(-1, 1) === -1)
            this.speedY = this.speedY * (-1);
        this.coard = {'x': x, 'y': y}
        this.r = randomNumber(0, 255);
        this.g = randomNumber(0, 255);
        this.b = randomNumber(0, 255);
        this.mass = this.R / 10;
    }

    draw() {
        this.context.fillStyle = `rgb(${this.r},${this.g},${this.b})`;
        this.context.beginPath();
        this.context.arc(this.coard.x, this.coard.y, this.R, 0, 2 * Math.PI);
        this.context.fill();
        this.calcMove();

    }

    calcMove() {
        if (this.coard.x - this.R + this.speedX < 0 || this.coard.x + this.R + this.speedX > this.context.canvas.width) {
            this.speedX *= -1
        }
        if (this.coard.y - this.R + this.speedY < 0 || this.coard.y + this.R + this.speedY > this.context.canvas.height) {
            this.speedY *= -1
        }
        if (this.coard.y + this.R > this.context.canvas.height) {
            this.coard.y = this.context.canvas.height - this.R;
        }
        if (this.coard.y - this.R < 0) {
            this.coard.y = this.R
        }
        if (this.coard.x + this.R > this.context.canvas.width) {
            this.coard.x = this.context.canvas.width - this.R
        }
        if (this.coard.x - this.R < 0) {
            this.coard.x = this.R
        }
        this.coard.x += this.speedX;
        this.coard.y += this.speedY;
    }
}


//removeIf(production)
module.exports = {Circles}
//endRemoveIf(production)