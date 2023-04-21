song=""
song2=""
scorerightwrist=0
scoreleftwrist=0
leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
function preload(){
    song=loadSound("music.mp3")
    song2=loadSound("harry.mp3")
}
function setup(){
canvas = createCanvas(600,500)
canvas.center()
video = createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelloaded)
posenet.on('pose',gotresult)
}
function modelloaded(){
    console.log("modelisloaded")
}
function draw(){
    image(video, 0,0,600,500)
}
function play(){
    song.play()
}
function gotresult(results){
console.log(results)
scorerightwrist=results[0].pose.rightWrist.confidence
scoreleftwrist=results[0].pose.leftWrist.confidence
leftwristx=results[0].pose.leftWrist.x
leftwristy=results[0].pose.leftWrist.y
rightwristx=results[0].pose.rightWrist.x
rightwristy=results[0].pose.rightWrist.y
}