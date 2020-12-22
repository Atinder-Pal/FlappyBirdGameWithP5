let bird;
let pipes = [];

function setup() {
  createCanvas(800, 600);
  bird = new Bird();  
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  bird.update();
  bird.show();

  if(frameCount % 100 ==0) 
    pipes.push(new Pipe());

  for(let i =0; i< pipes.length; i++){
    pipes[i].show();
    pipes[i].update();
  }
}

function keyPressed(){
  if(key == ' '){
    //console.log("SPACE");
    bird.up();
  }
}
