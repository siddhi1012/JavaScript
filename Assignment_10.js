let box = document.querySelector("#box");
box.addEventListener("mouseout", function (){
    console.log(event);
    console.log("Target:", event.target);
    console.log("Related Target:", event.relatedTarget);

});

let inp = document.querySelector("input");
inp.addEventListener("keypress", function (){
    console.log(event);
    console.log("Key",event.key);
    console.log("Code",event.code);

});

let box2 = document.querySelector("#box2");
box2.addEventListener("scroll", function (){
    console.log("Text was Scrolling");

});

let img = document.querySelector("#myImg");
img.addEventListener("load", function (){
    console.log("Image has finished loading!");
    alert("Image is fully loaded and ready to display.");

});

let btn2 = document.createElement("button");
btn2.innerText = "Click Me";
let body = document.querySelector("body");
body.append(btn2);
btn2.addEventListener("click", function (){
    console.log("Button Was Clicked");
    btn2.style.backgroundColor = "green";


});
