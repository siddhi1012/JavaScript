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