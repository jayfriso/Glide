//FUNCTION TO CHECK COLLISION

function collision(aR, aL, aT, aB, bR, bL, bT, bB) {
    var leftcollision = (aR > bL && bR > aL);
    var rightcollision = (bR > aL && aR > bL);
    var bottomcollision = (aB > bT && bB > aT);
    var topcollision = (bB > aT && aT > bT);
    var collision = (leftcollision && bottomcollision) || 
                    (leftcollision && topcollision) ||
                    (rightcollision && bottomcollision) || 
                    (rightcollision && topcollision)
    return collision;
}
function collisiontest() {
    console.log(collision(20, 10, 10, 20, 40, 30, 30, 40));
    console.log(collision(20, 10, 10, 20, 15, 5, 5, 15))
}