var addToList = document.getElementById("add");
var ul = document.querySelector("ul");


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
    
    var txt = document.createTextNode(userInput);
    li.appendChild(txt);

    if (userInput === "")
        alert("You have not written in the textfield");
    else
        ul.appendChild(li);

    addDelButton(li);
    document.getElementById("activity").value = "";       
    
});


ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
