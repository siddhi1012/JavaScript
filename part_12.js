// Async keyword
async function greet () {
    throw "weak Connection";
    return "Hello World";
}
greet()
.then((result) => {
    console.log("Promises was resolved");
    console.log("result was:",result);
})
.catch((err) =>{
    console.log("Promises was rejected");
    console.log("Error was:",err);   
});
let demo = async() =>{
    return 5 ;
}


// Await keyword
function getnum (){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function Demo (){
    await getnum();
    await getnum();
    getnum();
}

h1 = document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            h1.style.color = color;
            console.log(`color change of ${color}`);
            resolve("color Changed!")
        },delay);
    });
}
async function Demo2(){
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("pink",1000);

    let a = 5;
    console.log(a)
    console.log("New Number : ", a+3);
}

let url = "https://catfact.ninja/fact";
fetch(url);