let btn = document.querySelector('button');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
console.dir(btn)

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue"

}
btn.addEventListener("click",changeColor );
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
// let btn = document.querySelectorAll("button");
// console.dir(btn)
// for(button of btn){
//     //    button.onclick = sayHello;
//     //    button.onclick = sayName;
//     // button.addEventListener("click",sayHello);
//     // button.addEventListener("click",sayName);
//     button.addEventListener("dblclick",function (){
//         console.log("You Double Clicked");
//     });     
// }
// function sayHello(){
//     alert("Button was Clicked");
// }

// function sayName(){
//     alert("Bubu...Dudu...");
// }

// let p = document.querySelector('p');
// p.addEventListener("click",function (){
//     console.log("Paragraph is click");
// });

// let div = document.querySelector('div');
// div.addEventListener("mouseenter",function(){
//     console.log("Mouse Entered inside div");

// });