let p = document.createElement('p');
p.innerText = "Hey, I am Red";
p.style.color = "red";
let body = document.querySelector('body');
body.append(p);


let h3 = document.createElement('h3');
h3.innerText = "I am a blue H3!";
h3.style.color = "blue";
body.append(h3);


let div = document.createElement('div');
// div.style.border = "1px solid black";
// div.style.backgroundColor = "pink";
body.append(div)
div.classList.add("design")

let h1 = document.createElement('h1');
h1.innerText = "I'm a Div";

let p1 = document.createElement('p');
p1.innerText = "Me Too!";
div.append(h1 , p1);

