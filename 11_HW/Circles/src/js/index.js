//removeIf(production)
const {getNode, setNodeInnerText, getNodeValue, addListener,randomNumber} = require('./utils')
const {Canvas} = require('./Canvas')
//endRemoveIf(production)

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {

    const canvas = new Canvas('canvas');
    // addListener('save', 'click', painter.savePicture.bind(painter));
    addListener('canvas', 'click', drawIfPressed.bind(null,canvas));
    let timerId = setInterval(canvas.drawCircles.bind(canvas), 500);
    // addListener('rangeWidth', 'input', setValue.bind(null, 'rangeWidth', 'rangeValue', painter.setLineWidth.bind(painter)));
    // addListener('color', 'change', setValue.bind(null, 'color', 'colorValue', painter.setLineColor.bind(painter)));

}

function drawIfPressed(canvas,e) {
    const x = e.offsetX;
    const y = e.offsetY;
    canvas.addCircles(x,y);
    // canvas.drawCircles();
}

function setValue(id, idNodeValue, cb) {
    setNodeInnerText(idNodeValue, getNodeValue(id));
    cb(getNodeValue(id));
}

//removeIf(production)
module.exports = {setValue,drawIfPressed,onWindowLoad}
//endRemoveIf(production)