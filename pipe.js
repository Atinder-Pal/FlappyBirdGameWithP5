class Pipe {
    constructor(){
        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.pipeWidth = 20;
        this.speed = 1;
    }

    show(){
        fill(255);
        rect(this.x, 0, this.pipeWidth, this.top);
        rect(this.x, height -this.bottom, this.pipeWidth, this.bottom);
    }

    update(){
        this.x -= this.speed;
    }
}