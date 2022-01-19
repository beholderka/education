function addListener(className, eventType, callback) {
    const node = document.querySelector(className);
    if (node) {
        node.addEventListener(eventType, callback);
    }
}
function getNodeInnerText(className) {
    const node = document.querySelector(className);
    if (node) {
        return node.innerText;
    }
    return '';
}


function setNodeInnerHTML(className,value='') {
    const node = document.querySelector(className);
    if (node) {
        node.innerHTML=value;
        return true;
    }
    return false;
}

function setNodeValue(className,value='') {
    const node = document.querySelector(className);
    if (node) {
        node.value=value;
        return true;
    }
    return false;
}