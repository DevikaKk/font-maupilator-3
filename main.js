noseX = 0;
noseY = 0;
difference =0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    var canvas = createCanvas(550, 500);
    canvas.position(600, 150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function draw() {
    background('#969A97')
    textSize(32);
    document.getElementById("text_side").innerHTML = "width and te height of the text will be = " + difference + " px";
    fill ("pink");
    stroke ("pink");
    text("word", noseX, noseY);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX);
        console.log("noseY" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX" + leftWristX);
        console.log("rightWristX" + rightWristX);
        console.log("difference" + difference);
    }
}