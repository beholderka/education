//removeIf(production)
const {createElement} = require('./utils')
//endRemoveIf(production)

class Painter {
    constructor(canvas) {
        this.context = canvas.getContext("2d");
        this.context.lineCap = "round";
        this.context.lineWidth = 1;
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, canvas.width, canvas.height);
    }

    draw(x, y, dx, dy) {
        this.context.beginPath();
        this.context.moveTo(dx, dy);
        this.context.lineTo(x, y);
        this.context.stroke();
        // this.context.closePath();
    }

    setLineWidth(value) {
        this.context.lineWidth = value;
    }

    setLineColor(value) {
        this.context.strokeStyle = value;
    }

    savePicture() {
        const dataURL = this.context.canvas.toDataURL("image/jpeg");
        const link = createElement("a");
        link.href = dataURL;
        link.download = "my-image-name.json";
        link.click();

    }
}
//removeIf(production)
module.exports = {Painter}
//endRemoveIf(production)
