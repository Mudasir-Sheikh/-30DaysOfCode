//Using Properties and Methods:
// 1.innerText : Shows the visible text contained in a node (only text which displays on a Screen). 
// 2.textContent: Shows All the text written in html file (including hidden texts,tags i.e bold italic anchor etc).
// 3.innerHTML : Shows the Full Markup (full html and css)
console.dir(document.querySelector("p"));
let para = document.querySelector("p");
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);


let heading = document.querySelector("h1");
heading.innerText = "New DOM Manipulation";
heading.innerHTML=`<u>${heading.innerText}</u>`;



//Manipulating Attributes:
// --id , class , style , img--> src ...etc are all Attributes
// Obj.getAttribute(attr);               
// Obj.setAttribute(attr , val);    //--> known as getters and setters

//Example:
let image = document.querySelector('img');  //selects first image in browser;
let getattr = image.getAttribute("class");
console.log(getattr);

let setAttr = image.setAttribute("class","mynewid");
let newattr = image.getAttribute("class");
console.log(newattr);


image.setAttribute("src","Images/l.png"); //setting new source of image using setter
image.setAttribute("id","newIdGiven")   //giving new ID to the image;
image.getAttribute("id");  // new id has assigned

// let newimg = document.querySelector("setimg");
// newimg.setAttribute("src","Images/l (14).jpg"); 


//Manipulating Style (with style attribute);        //in JS for css , heifen"-" are converted into CamelCase;
let headingg = document.querySelector("h1"); 
heading.style.color = "red"
heading.style.backgroundColor= "black";


let links = document.querySelectorAll(".list a");
for (link of links){
    link.style.color = "purple"    //inline style only
}
//Style property only works on inline css but does not work on external css.



//ClassList Property;
// 1.Adding a Class in a ClassList
let heading_ = document.querySelector("h2");
heading_.classList.add("edited")
console.log(heading_.classList);

// 2.Removing a Class from ClassList
heading_.classList.add("deleted");
console.log(heading_.classList);
heading_.classList.remove("deleted");

// 3.Checking if a ClassList contains the Class
console.log(heading_.classList.contains("myclass")); //results false

//4. Toggle --> to toggle between add and remove
//i.e if class is not preseny it will be added, if class is present it will be removed.
heading_.classList.toggle("toggleclass");  //new class added
console.log(heading_.classList);
heading_.classList.toggle("toggleclass");  //class removed
console.log(heading_.classList);



//Navigation:
//1.ParentElement
//2.children or childElementCount-->gives length
//3.previousElementSiblings OR nextElementSiblings;

let h1 = document.querySelector("h1");
console.log(h1.parentElement);

let h2 = document.querySelector("h2");
console.log(h2.previousElementSibling);

let div = document.querySelector(".main");
console.log(div.children)
console.log(div.childElementCount)

//changing style through navigation to next sibling
h2.nextElementSibling.style.backgroundColor = "yellow";
