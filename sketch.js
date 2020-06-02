var raindrop = [];


function setup() {
  createCanvas(1200,400);
  for (var i = 0; i< 400; i=i+10) {
    raindrop[i] = new Raindrop();
}
}

function draw() {
  background("blue"); 
  for (var i = 0; i< 400; i=i+10) {
    raindrop[i].display();
    raindrop[i].fall();
}
}