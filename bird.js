class Bird {
    constructor(){
        this.y = height/2;
        this.x = 100;
    }

    show(){
        fill(255);
        ellipse(this.x, this.y, 16, 16);
    }
}