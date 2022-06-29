function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
   image(video,0,0,300,300);
}
function take_snapshot(){
    save("mustache_image.png");
}
function modelLoaded(){
    console.log("Got pose");
}
function gotPoses(results){
    console.log(results);
    console.log("nose_x ="+ results[0].pose.nose.x);
    console.log("nose_y ="+ results[0].pose.nose.y);
}