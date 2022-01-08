function addSpark(id) {
    let animationDiv = document.getElementById(id);
    for (let i = 1; i <= 36; i++) {
        let sparkDiv = document.createElement('div');
        sparkDiv.setAttribute('class', `spark-${i}`);
        animationDiv.appendChild(sparkDiv);
    }
}

function deleteSpark(id) {
    let animationDiv = document.getElementById(id);
    for (let i = 1; i <= 36; i++) {
        let sparkDiv = document.querySelector(`.spark-${i}`);
        animationDiv.removeChild(sparkDiv);
    }
}
