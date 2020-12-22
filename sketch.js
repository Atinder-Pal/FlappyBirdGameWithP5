let bird;

function setup() {
  createCanvas(800, 600);
  bird = new Bird();
}

function draw() {
  background(0);

  bird.update();
  bird.show();
}
