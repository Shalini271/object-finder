cocoStatus=""

function setup(){
canvas=createCanvas(600,400);
canvas.center();
}
 
function draw(){
    image(cam,0,0,600,400);
    if(cocoStatus != ""){
       cocoModel.detect(cam,gotResults);
    }
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.size(600,400);
    cam.hide();
}

function start(){
    cocoModel=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("modelStatus").innerHTML="Status: Detecting objects...";
    objectdetect=document.getElementById("objectDetect").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    cocoStatus="true";
}

function gotResults(error,results){
    if(error){
        console.log("error");
    }
    else{
       console.log(results);
    }
}