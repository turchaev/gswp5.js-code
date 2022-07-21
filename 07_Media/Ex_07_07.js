var img;

function setup() {
  createCanvas(480, 120);
  img = loadImage('../media/lunar.jpg');
  noLoop();
}

function draw() {
  background(200);
  image(img, 0, 0);
}