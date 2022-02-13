function clearInput(flag = true,isSave=false) {
    if (isSave)
    {
        if (!flag) {
            setNodeValue('rangeFrom');
            setNodeValue('rangeUpDo');
            setNodeValue('numberOfAttempts');
        }
        setNodeInnerText('hintNumberData');
    } else {
        if (flag) {
            setNodeValue('inputValue');
        }
        if (!flag) {
            setNodeInnerText('hintText');
        }
    }
}

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


function setNodeInnerText(id,value='') {
    const node = document.getElementById(id);
    if (node) {
        node.innerText=value;
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
function randomValueMadeNumber(minValue, maxValue) {
    // valuePCNumber =;
    return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

module.exports = {randomValueMadeNumber, setNodeValue, setNodeInnerText, getNodeValue,addListener,clearInput}