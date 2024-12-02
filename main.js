let newBtn = document.createElement("button");
newBtn.innerText="click me"
newBtn.style.color= "white";
newBtn.style.backgroundColor ="red";

// let headings= document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);

// let parah= document.getElementsByTagName("p");
// console.dir(parah);
// console.log(parah);

// let firstElement = document.querySelector(".heading");
// console.dir(firstElement);


// let allElement = document.querySelectorAll(".heading");
// console.dir(allElement);

let div = document.querySelector("div");
console.dir(div);


//DOM add event listener
document.getElementById("abc").onclick = abc;
function abc(){
    document.getElementById("abc").style.background ="green";
}

document.getElementById("xyz").onmouseenter=abc;
function abc(){
    document.getElementById("xyz").style.background ="blue";
}


document.getElementById("heading-1").addEventListener("mouseenter",heading);
document.getElementById("heading-1").addEventListener("click",function(){
    document.getElementById("heading-1").style.border = "10px solid black";
});
function heading(){
    document.getElementById("heading-1").style.background ="green";
}