var circle = document.getElementById("circle");
var UpBtn = document.getElementById("UpBtn");
var DownBtn = document.getElementById("DownBtn");

var rotateValue = circle.style.transform;

var rotateSum;

UpBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

}

DownBtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

}
