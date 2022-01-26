

function addListener(id, eventType, callback) {
    const node = document.getElementById(id);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}

function getNodeValue(id) {
    const node = document.getElementById(id);
    if (node) {
        return node.value;
    }
    return '';
}

function setNodeInnerText(id, value) {
    const node = document.getElementById(id);
    if (node) {
        node.innerText = value;
        return true;
    }
    return false;
}

function getNode(id) {
    const node = document.getElementById(id);
    if (node) {
        return node;
    }
    return null;
}

function createElement(tag) {
    return document.createElement("tag");
}
//removeIf(production)
module.exports={addListener,createElement,getNodeValue,setNodeInnerText,getNode}
//endRemoveIf(production)
