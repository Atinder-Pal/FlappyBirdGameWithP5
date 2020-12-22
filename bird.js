class Bird {
    constructor(){
        this.y = width/2;
        this.x = 25;
    }

    show(){
        fill(255);
        ellipse(this.x, this.y, 16, 16);
    }
}