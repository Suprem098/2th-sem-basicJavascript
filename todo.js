const heading  = document.getElementById("heading");
const box1  = document.getElementById("box1");
const addBTn  = document.getElementById("addBTn");
 let input = document.getElementById("newInput");


addBTn.addEventListener("click", () => {
    console.log("clicked");
    heading.innerText = "who are you";
    heading.style.backgroundColor = "red";
    heading.style.color = "white";
    heading.style.padding = "20px";
});

addBTn.addEventListener ("dblclick", () => {
    addBTn.style.backgroundColor = "purple";
    addBTn.style.color = "white";
    addBTn.style.padding = "20px";
    addBTn.style.border =  "none";
});

input.addEventListener("change",(e) => {
    console.log(e.target.value);
});
