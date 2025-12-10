// QS - 1
let para1 = document.createElement('p');
para1.innerText = "Hey...I am Red!!!";
let body = document.querySelector('body');
body.append(para1);
para1.classList.add('red');
// QS - 2
let h3 =document.createElement('h3');
h3.innerText = "I'm a blue h3!!!";
body.append(h3);
h3.classList.add("blue");

// QS - 3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");
// first set child ele -> then parent
h1.innerText = "I'm in a div";
para2.innerText = "Me Too";
div.append(h1);
div.append(para2);
div.classList.add("box");
body.append(div);

