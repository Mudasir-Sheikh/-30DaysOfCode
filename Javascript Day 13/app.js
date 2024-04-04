//Adding Elements by JS: --> if we want to add elements using JS;
let new_p = document.createElement('p');
//Adding Text:
new_p.innerText = "Hi This is New P!";


//Methods:
// 1. parent/object.appendChild()--> if we want to append a child element in the end of parent : 
let list = document.querySelector('.list');
list.appendChild(new_p);  //appends at last of list

let new_para = document.createElement('p');
new_para.innerText = "This is New Para!"
let body = document.querySelector('body');
body.appendChild(new_para); //appends at last of body

//2.object.append(element or add more content to existing element) -->This is more useful and used then 
// appendchild() because it not only appends but also append content to the existing content.
//You just need the name of class in which you want to append
let btn = document.createElement("button");
btn.innerText = "Click Me!";
list.append(btn);  //same working
btn.append("Now!") //new text added to click me!
new_para.append("New content appended");


3.//obj.prepend(...same...)--> appends the element/content at the start
btn.prepend("First");


// 4.Object.insertAdjacentElement("position" , element) --> more precise control on where the element should be added.
// ===Position: 1.beforebegin  2.afterbegin  3.beforeend  4.afterend  
let contentClass = document.querySelector('.content');
let newbtn = document.createElement("button");
newbtn.innerText = "MY NEW BTN";
// contentClass.insertAdjacentElement("beforebegin",newbtn);
// contentClass.insertAdjacentElement("afterbegin",newbtn);
// contentClass.insertAdjacentElement("beforeend",newbtn);
contentClass.insertAdjacentElement("afterend",newbtn);



// 5.Object.removechild(Element) --> it removes the element of the parent 
body.removeChild(new_para); //last para removed.

//6. Object.remove() --> it removes the given element directly ---> more useful and used.
body.append(new_para); //Again new para added.
new_para.remove();
