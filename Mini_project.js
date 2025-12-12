let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function (){
    Event.stopPropagation
    console.log("Div was Clicked");
});

ul.addEventListener("click", function (){
    console.log("ul was Clicked");
});

for (lis of li){
lis.addEventListener("click", function (){
    console.log("li was Clicked");
});
}