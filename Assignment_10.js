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