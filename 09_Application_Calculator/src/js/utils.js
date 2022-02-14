function addListener(className, eventType, callback) {
    const node = document.querySelector(className);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}
function setNodeInnerHTML(id,value='') {
    const node = document.getElementById(id);
    if (node) {
        node.innerHTML=value;
        return true;
    }
    return false;
}

function setNodeValue(id,value='') {
    const node = document.getElementById(id);
    if (node) {
        node.value=value;
        return true;
    }
    return false;
}

module.exports = {setNodeInnerHTML,setNodeValue,addListener}