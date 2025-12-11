let btn = document.querySelector('button');
let h3 =  document.querySelector('h3');
btn.addEventListener("click",function(){
   
});

function getRandomColor(){
    // Randon Range -> 0-255 (RGB)
    let red = Math.floor(Math.random() * 255) ;
    let green = Math.floor(Math.random() * 255) ;
    let blue = Math.floor(Math.random() * 255) ;

    let color = `rgb(${red},${green},${blue})`;
    return color;

}