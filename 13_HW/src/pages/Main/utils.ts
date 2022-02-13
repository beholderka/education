
export function getNode(id) {
  const node = document.getElementById(id);
  if (node) {
    return node;
  }
  return null;
}

export function randomArrayElement(array, minValue, maxValue) {
  return array[randomNumber(minValue, maxValue)];
}

export function randomNumber(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue) + minValue);
}

export function addListener(id, eventType, callback) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(eventType, callback);
  }
}

export function setNodeValue(id, callback) {
  const node = document.getElementById(id);
  if (node) {
    // @ts-ignore
    node.value = callback();
    return true;
  }
  return false;
}

export function getNodeValue(id) {
  const node = document.getElementById(id);
  if (node) {
    // @ts-ignore
    return node.value;
  }
  return '';
}

export function setNodeDisabled(id,disabled=true) {
  const node = document.getElementById(id);
  if (node) {
    // @ts-ignore
    node.disabled = disabled;
    return true;
  }
  return false;
}

export function promiseTemplate(candidate, property, timeout, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (callback(candidate[property])) {
        resolve(true);
      } else {
        reject(false);
      }
    }, timeout);
  });
}
