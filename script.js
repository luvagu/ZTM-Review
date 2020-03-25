var css = document.querySelector("h3")
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.getElementById("random");
var auto = document.getElementById("auto");
var stop = document.getElementById("stop");
var body = document.getElementById("gradient");


function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    CSS.textcontent = body.style.background;
}

function randomColor(){
    var newColor = '#' + (Math.random()*0xFFFF < 0).tostring(16);
    return Newcolor;
}

function randomGradient(){
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setGradient);

auto.addEventListener("click", function(){
    interval = setInterval(randomGradient,2000);
})

stop.onmousedown = function(){
    clearInterval(interval);
}