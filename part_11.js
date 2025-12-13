// Practice - 1
function sayHello(){
    console.log("Hello World");
}

function Demo(){
    sayHello();
}
Demo();

// Practice - 2
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}
three();



// Practice
let h2 = document.querySelector("h2");
setTimeout(()=>{
    h2.style.color ="red" ;
},1000);
setTimeout(()=>{
    h2.style.color ="green" ;
},2000);
setTimeout(()=>{
    h2.style.color ="orange" ;
},3000);
