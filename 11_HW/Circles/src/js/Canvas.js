//removeIf(production)
const {getNode, setNodeInnerText, getNodeValue, addListener, randomNumber} = require('./utils')
const {Circles} = require('./Circles')
//endRemoveIf(production)

class Canvas {
    constructor(id) {
        this.canvas = getNode(id);
        this.context = this.canvas.getContext('2d');
        this.arrayCircles = [];
    }

    addCircles(x, y) {
        this.arrayCircles.push(new Circles(this.context, randomNumber(10, 50), randomNumber(5, 25), x, y));
    }

    drawCircles() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.arrayCircles.length; i++)
            for (let j = 0; j < this.arrayCircles.length; j++) {
                if (i !== j) {
                    this.checkCollision(this.arrayCircles[i], this.arrayCircles[j])
                }
            }
        this.arrayCircles.forEach((circle) => {
            circle.draw();
        })
    }

    checkCollision(circle1, circle2) {
        const dx = circle2.coard.x - circle1.coard.x;
        const dy = circle2.coard.y - circle1.coard.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const nx = dx / dist;
        const ny = dy / dist;
        const d = closestPointOnLine(circle1.coard.x, circle1.coard.y,
            circle1.coard.x + circle1.speedX, circle1.coard.y + circle1.speedY, circle2.coard.x, circle2.coard.y);
        const closestDistSq = Math.pow(circle2.coard.x - d.x, 2) + Math.pow(circle2.coard.y - d.y, 2);
        const backDist = Math.sqrt(Math.pow(circle1.R + circle2.R, 2) - closestDistSq);
        const movementVectorLength = Math.sqrt(Math.pow(circle1.speedX, 2) + Math.pow(circle1.speedY, 2));
        const c_x = d.x - backDist * (circle1.speedX / movementVectorLength);
        const c_y = d.y - backDist * (circle1.speedY / movementVectorLength);
        const collisionDist = Math.sqrt(Math.pow(circle2.coard.x - c_x, 2) + Math.pow(circle2.coard.y - c_y, 2));
        const n_x = (circle2.coard.x - c_x) / collisionDist;
        const n_y = (circle2.coard.y - c_y) / collisionDist;
        const p = 2 * (circle1.speedX * nx + circle1.speedY * n_y - circle2.speedX * nx - circle2.speedY * n_y) /
            (circle1.mass + circle2.mass);
        if (dist < circle1.R + circle2.R) {
            const vx1 = circle1.speedX - p * circle1.mass * n_x;
            const vy1 = circle1.speedY - p * circle1.mass * n_y;
            const vx2 = circle2.speedX + p * circle2.mass * n_x;
            const vy2 = circle2.speedY + p * circle2.mass * n_y;
            circle1.speedX = vx1;
            circle1.speedY = vy1;
            circle2.speedX = vx2;
            circle2.speedY = vy2;
            staticCollision(circle1,circle2);
        }

    }
}

function staticCollision(circle1, circle2, emergency=false)  {
    // Спасибо индусам, что помогли найти решение застревания шаров....
    let overlap = circle1.R + circle2.R - findDistance(circle1, circle2);
    let smallerObject = circle1.R < circle2.R ? circle1 : circle2;
    let biggerObject = circle1.R > circle2.R ? circle1 : circle2;

    if (emergency) {
        [smallerObject, biggerObject] = [biggerObject, smallerObject]
    }

    let theta = Math.atan2((biggerObject.coard.y - smallerObject.coard.y), (biggerObject.coard.x - smallerObject.coard.x));
    smallerObject.coard.x -= overlap * Math.cos(theta);
    smallerObject.coard.y -= overlap * Math.sin(theta);

    if (findDistance(circle1, circle2) < circle1.R + circle2.R) {
        if (!emergency) staticCollision(circle1, circle2, true)
    }
}
function findDistance(circle1, circle2) {
    const dx = circle2.coard.x - circle1.coard.x;
    const dy = circle2.coard.y - circle1.coard.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    return dist;
}

function closestPointOnLine(lx1, ly1, lx2, ly2, x0, y0) {
    const A1 = ly2 - ly1;
    const B1 = lx1 - lx2;
    const C1 = (ly2 - ly1) * lx1 + (lx1 - lx2) * ly1;
    const C2 = -B1 * x0 + A1 * y0;
    const det = A1 * A1 - -B1 * B1;
    let cx = 0;
    let cy = 0;
    if (det !== 0) {
        cx = ((A1 * C1 - B1 * C2) / det);
        cy = ((A1 * C2 - -B1 * C1) / det);
    } else {
        cx = x0;
        cy = y0;
    }
    return {x: cx, y: cy};
}

//removeIf(production)
module.exports = {Canvas}
//endRemoveIf(production)