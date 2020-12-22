class Pipe {
    constructor(){
        this.top = random(height/2);
        this.bottom = random(height/2);
        this.x = width;
        this.pipeWidth = 20;
        this.speed = 2;
    }

    hits(bird){
        if(bird.y < this.top || bird.y > height - this.botton){
            if(bird.x > this.x && bird.x < this.x + this.pipeWidth)
               return true; 
        }
        return false;
    }

    show(){
        fill(255);
        rect(this.x, 0, this.pipeWidth, this.top);
        rect(this.x, height -this.bottom, this.pipeWidth, this.bottom);
    }

    update(){
        this.x -= this.speed;
    }

    offscreen(){
        if(this.x < - this.pipeWidth) 
            return true;
        else
            return false;        
    }
}