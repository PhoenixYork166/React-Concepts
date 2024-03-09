var bubbles = [];

const setup = () => {
    createCanvas(600,400);
}

const mousePress = () => {
    let b = new bubbles(mouseX, mouseY);
    bubbles.push(b);
}

const draw = () => {
    background(0);
    for (let i=0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }
}