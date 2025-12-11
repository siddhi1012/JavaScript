// let btn = document.querySelector("button");
// // btn.addEventListener("click",function (event){
// //     console.log(event)
// //     console.log("Button Clicked!!!");
// // });

// // btn.addEventListener("dblclick",function (event){
// //     console.log(event)
// //     console.log("Button Double Clicked!!!");
// // });
let inp = document.querySelector("input");
inp.addEventListener("keydown",function (event){
    console.log("Key =",event.key);
    console.log("Code =",event.code);
    console.log("Key Was Pressed")

});

// inp.addEventListener("keyup",function (){
//     console.log("Key Was released")

// });
