var newElement =document.createElement("h4");
var newText =document.createTextNode("this is just text");
newElement.appendChild(newText);

document.getElementById("text").appendChild(newElement);



// var newComment =document.createComment("this is comment");
// console.log(newComment);



var newElement =document.createElement("h4");
var newText =document.createTextNode("this is just text");
newElement.appendChild(newText);

var target = document.getElementById("text-1");
target.insertBefore(newElement,target.childNodes[1])