const { default: axios } = require("axios");

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
// fetch(url)
// .then((res) =>{
//     console.log(res);
//     // console.log(res.json()); // read Data
//     return res.json();
// })
// .then((data) => {
//     console.log("Data 1:",data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();

// })
// .then((data2) => {
//     console.log("Data 2:",data2.fact);

// })
// .catch((err) => {
//     console.log("Error :",err);
// });

// Request using async and await
// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);        
//     }catch(e){
//         console.log("Error",e);
//     }

// }

// Request using axios
let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});
async function getFacts(){
    try{
       let res = await axios.get(url);
       return res.data.fact;
    }catch(e){
        console.log("Error -",e);
        return "No Fact found";
    }

}


 