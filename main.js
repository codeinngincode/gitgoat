noseX=0;
noseY=0;

function preload() {
clown_nono=loadImage('https://i.postimg.cc/Bnmp22xM/Pure-Black-Circle-Circle-Clipart-Round-Shape-PNG-Transparent-Clipart-Image-and-PSD-File-for-Free.jpg');
}

function setup() {
    canvas=createCanvas(765.789,789.765)
    canvas.position(335, 250)
    video=createCapture(VIDEO)
    video.hide()
 
    }

function draw() {
    image(video,0,0,765.789,789.765)
    fill(20,0,10)
    stroke(30,0,15)
    circle (noseX, noseY ,30)
    image(clown_nono, noseX,noseY,30,30)  
}
function take_snapshot() {
    save('bobogagatutufuto.gif')
}
function filter_tint() {
    tint_color=document.getElementById("color_name").value
}

function modelLoaded(){
    console.log('posenet is deactivated')
}

function gotPoses (results){
    if(results.length>0){
        console.log(results);
        console.log('"x"'+results[0].pose.nose.x) ;
        console.log('"y"'+results[0].pose.nose.y) ;
        noseX=results[0].pose.nose.x-15
        noseY=results[0].pose.nose.y-15

}