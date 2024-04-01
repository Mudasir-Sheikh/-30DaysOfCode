//DOM( Document Object Model) --> it represents a document with logical tree
// it allows us to manipulate/change webpage content (HTML Element)

//when we connect js with html+css then this script will be converted in to a logical tree representing parent and child.
//first node will be formed of Document object
//second node will be formed of Body object
//then rest is of childs i.e div,h1,ul,span....etc

//All code of html css are assissed by Js by Document object.

//Seleting Element by ID --> document.GetEleementByID = ("id_name")-> Returns the elemnts as object or null(if not found).


///Seleting by Classname--> GetElementbyClassName("---"):
//Returns the Element as a HTML Collection or empty colection(if not found);
// the HTML Collection is similar to array but not an array i.e we cant not use push pop advanced methods. 
// we can just use length or access by [index]
let img = document.getElementsByClassName("oldimg");  //return HTML collection of objects
console.log(img);
for (let i=0; i<img.length; i++){
    console.log(img[i]);  //printing image object
}
for (let i=0; i<img.length; i++){
    console.log(img[i].src); //printing source of image obj
}

document.getElementsByClassName("oldimg")[1]; //accessing using index.

//changing source of images using loop
for (let i=0; i<img.length; i++){
    img[i].src = "Images/l.png"
}
console.dir(img);



///Seleting by Classname--> GetElementbyTagName("---"):
//Returns the Element as a HTML Collection or empty colection(if not found);
console.log(document.getElementsByTagName("p"));
let para = document.getElementsByTagName("p")[0];
para.innerText = "Changed by using JS by InnerText Obj"



//Query Selectors ---> Allow us to use CSS selectors
document.querySelector(".images") //every query used for selecting css can be written in the strings
document.querySelector(".images > h2")
let pr = document.querySelector("p");
console.dir(pr)
//This selector only gives the first matching query selector.
console.log(document.querySelector(".images  h2") );


//Inorder to select All elements use;
console.log(document.querySelectorAll(".images  h2") );
console.log(document.querySelectorAll("p") );

