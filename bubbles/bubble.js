const Bubble = (x, y) => {
    this.x = x;
    this.y = y;
    // define particle live time
    this.lifespan = 255;

    //Bubble.display func
    this.display = function() {
        stroke(255);
        fill(255, this.lifespan);
        ellipse(this.x, this.y, 48, 48);
    }

    //Bubble.move func
    this.move = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
        this.lifespan--;
    }

}
