var btn = document.querySelector("button")
var body = document.querySelector("body");
var pargra = document.querySelector("p");


function mycolor1(){
    body.style.backgroundColor = "red";
}

function mycolor2(){
    pargra.style.color= "white";
}

function mycolor3(){
    btn.style.backgroundColor = "blue";
}

function mycolor4(){
    btn.style.backgroundColor = "white";
}

btn.addEventListener("click", mycolor1);
btn.addEventListener("click", mycolor2);
btn.addEventListener("mouseover", mycolor3);
btn.addEventListener("mouseout", mycolor4);