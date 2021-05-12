function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(500,250);

    video=createCapture(VIDEO);
    video.hide();
}
song = "";
function draw(){
    image(video,0,0,600,600);
}
function preload(){
    song=loadSound("music.mp3");
}
function play_sound(){
    song.play();
}
function stop_sound(){
    song.stop();
}
