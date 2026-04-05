var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", loadList);

function newElement() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') return;

    let li = document.createElement("li");
    li.textContent = inputValue;

    li.onclick = function () {
        li.classList.toggle("checked");
        saveList();
    };

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    saveList();
}
function saveList() {
    let items = [];
    document.querySelectorAll("#myUL li").forEach(li => {
        items.push({
            text: li.textContent,
            checked: li.classList.contains("checked")
        });
    });

    localStorage.setItem("todoList", JSON.stringify(items));
}

function loadList() {
    let data = localStorage.getItem("todoList");
    if (!data) return;

    let items = JSON.parse(data);
    let ul = document.getElementById("myUL");
    ul.innerHTML = "";

    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.text;

        if (item.checked) li.classList.add("checked");

        li.onclick = function () {
            li.classList.toggle("checked");
            saveList();
        };

        ul.appendChild(li);
    });
}