var addToList = document.getElementById("add");
var list = document.getElementsByClassName("to-do-list");
var ul = document.querySelector("ul");
var activityLine = document.getElementsByTagName("li");

function addDelButton(parent) {
    var buttonElem = parent.appendChild(document.createElement("button"));
    buttonElem.innerHTML = "X";
    buttonElem.className = "close";
    buttonElem.onclick = function() {
        this.parentElement.remove();
}}

addToList.addEventListener("click", function() {
    var userInput = document.getElementById("activity").value;
    var li = document.createElement("li");
    li.className = "checked";
    var txt = document.createTextNode(userInput);
    li.appendChild(txt);

    if (userInput === "")
        alert("You have not written in the textfield");
    else
        ul.appendChild(li);

    addDelButton(li);
    document.getElementById("activity").value = "";       
    
});

ul.addEventListener("click", function(ev) {
    if (ev.target.tagName === "li") {
        ev.target.classList.toggle("checked");
    }
}, false);