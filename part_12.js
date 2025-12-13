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