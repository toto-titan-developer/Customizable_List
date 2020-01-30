/*<------ EVENTS ------>*/

// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("Click!!");
// });
// button.addEventListener("mouseenter", function() {
//     console.log("Entered!!");
// });
// button.addEventListener("mouseleave", function() {
//     console.log("Lefted!!");
// });



var button = document.getElementById("enter");
var input = document.getElementById("user_input");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");

// Color Gradient
setGradient();

function setGradient() {
    body.style.background = 
        "linear-gradient(90deg, " 
        + color1.value 
        + "," 
        + color2.value
        + ","
        + color3.value
        + ","
        + color4.value
        + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color3.addEventListener("input", setGradient);

color4.addEventListener("input", setGradient);

// List Event Handlers
ul.onclick = function(event) {
    if (event.target !== ul){
        var target = event.target;
        target.classList.toggle("done");
    }
    
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("delete"));
    delBtn.onclick = RemoveParent;
    li.appendChild(delBtn);
    input.value = "";
}



function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }       
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
        
}

function RemoveParent(evt) {
    evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

