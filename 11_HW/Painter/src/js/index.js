//removeIf(production)
const {getNode, setNodeInnerText, getNodeValue, addListener} = require('./utils')
const {Painter} = require('./Painter')
//endRemoveIf(production)

window.addEventListener("load", onWindowLoad);

function onWindowLoad() {

    const painter = new Painter(getNode('canvas'));
    const mouse = {prevX: 0, prevY: 0}
    addListener('save', 'click', painter.savePicture.bind(painter));
    addListener('canvas', 'mousemove', drawIfPressed.bind(painter, mouse));
    addListener('rangeWidth', 'input', setValue.bind(null, 'rangeWidth', 'rangeValue', painter.setLineWidth.bind(painter)));
    addListener('color', 'change', setValue.bind(null, 'color', 'colorValue', painter.setLineColor.bind(painter)));

}

function drawIfPressed(mouse, e) {
    const x = e.offsetX;
    const y = e.offsetY;
    const dx = mouse.prevX;
    const dy = mouse.prevY;
    mouse.prevX = x;
    mouse.prevY = y;
    if (e.buttons > 0) {
        this.draw(x, y, dx, dy);
    }
}

function setValue(id, idNodeValue, cb) {
    setNodeInnerText(idNodeValue, getNodeValue(id));
    cb(getNodeValue(id));
}

//removeIf(production)
module.exports = {setValue,drawIfPressed,onWindowLoad}
//endRemoveIf(production)