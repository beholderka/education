function setNodeInnerText(id, value = '') {
    const node = document.getElementById(id);
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function getNodeValue(id) {
    const node = document.getElementById(id);
    if (node) {
        return node.value;
    }
    return '';
}

function setNodeDisable(id, disable = true) {
    const node = document.getElementById(id);
    if (node) {
        node.disable = disable;
        return true;
    }
    return false;
}

/*Формируем случайное число в диапазоне*/
function randomNumber(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}


function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}
module.exports = {addListener,setNodeInnerText, setNodeDisable,getNodeValue, randomNumber}

