status = "";
objects = [];

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Ststus: DETECTING OBJECTS!!";
    inp_val = document.getElementById("inp1").value;
}

function modelLoaded() {
    console.log("Model is laoded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 380, 380);
}