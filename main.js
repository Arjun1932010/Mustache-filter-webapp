
var nose_x=0;
var nose_y=0;
function preload(){
    img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");

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
   image(img,nose_x -20,nose_y -15,30,50);
}
function take_snapshot(){
    save("mustache_image.png");
}
function modelLoaded(){
    console.log("Got pose");
}
function gotPoses(results){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose_x ="+ nose_x);
    console.log("nose_y ="+ nose_y);
}
