// let btn = document.querySelector('button');
// console.dir(btn)

let btn = document.querySelectorAll("button");
console.dir(btn)
for(button of btn){
    //    button.onclick = sayHello;
    //    button.onclick = sayName;
    // button.addEventListener("click",sayHello);
    // button.addEventListener("click",sayName);
    button.addEventListener("dblclick",function (){
        console.log("You Double Clicked");
    });     
}
function sayHello(){
    alert("Button was Clicked");
}

function sayName(){
    alert("Bubu...Dudu...");
}

let p = document.querySelector('p');
p.addEventListener("click",function (){
    console.log("Paragraph is click");
});

let div = document.querySelector('div');
div.addEventListener("mouseenter",function(){
    console.log("Mouse Entered inside div");

});