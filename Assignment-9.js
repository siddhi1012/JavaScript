// QS-1
let btn = document.createElement('button');
let input = document.createElement('input');
let body = document.querySelector('body');
btn.innerText = "Click Me!!!";
body.append(input);
body.append(btn);

// QS - 2
input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

// QS - 3 
let button = document.querySelector('#btn');
button.classList.add('blue');

// QS - 4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";
body.append(h1);
h1.classList.add('blue');

//QS - 5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);