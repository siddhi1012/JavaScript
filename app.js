// let smallImages = document.getElementsByClassName("oldImg"); 
// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "spiderman_img.png";
//     console.log(`Value of the ${i} is Changed `);
// }
// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#mainImg"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("p"));

let links = document.querySelectorAll(".box a");
for(let i=0;i<links.length; i++){
    links[i].style.color = "pink";
}
