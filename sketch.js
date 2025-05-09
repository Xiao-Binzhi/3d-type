let columns = 5;
let rows = 8;
let testo = "I AM MUSIC";

//

let font;

function preload() {
  font = loadFont("./assets/IAmMusic-Regular.ttf-_4_.ttf");
}

//

let cam;

function setup() {
  createCanvas(windowWidth, windowHeight, "webgl");
  angleMode(DEGREES);

  textFont(font);
  textSize(height / rows);

  cam = createCamera();
  cam.setPosition(0, -8000, 9000);
  cam.lookAt(0, 1000, 200);
}

//

function draw() {
  background("white");
  orbitControl();

  let angle = 360 / columns;
  let diameter = textSize();

  fill("black");

  rotateY(-frameCount);
  for (let i = 0; i < columns; i++) {
    push();
    rotateY(angle * i);
    translate(diameter, 0, 0);
    for (let j = 0; j < rows; j++) {
      const a = cos(frameCount * 5 + j * 20);
      const m = map(a, -1, 1, 0, textSize());
      push();
      translate(m, textSize() * (j - rows / 2), 0);
      text(testo, 0, 0);
      pop();
    }
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSize(height / rows);
}
