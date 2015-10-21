
newButton = function() {

var w
var x
var y
var li
var contents

w = document.querySelector("#todolist");
x = document.querySelector("#task").value;
y = document.querySelector("#priority").value;

checker = document.createElement("input");
li = document.createElement("li");

checker.type = "checkbox";
checker.onClick= "doneTask();"

contents = document.createTextNode(x);
li.classList.add(y);
li.appendChild(checker);
li.appendChild(contents);

w.appendChild(li);



}
//localSave(id of your UL as a string)
doneTask = function(){
  if (this.checked) {
    this.parentNode.classList.add("done");
  } else {
      this.parentNode.classList.remove("done");
}
}
