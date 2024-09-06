let todoList = document.getElementById("todoList");
let addtaskbtn = document.getElementById("addtaskbtn");
let newtaskinp = document.getElementById("newtask");

function createElement() {
  let taskElement = document.createElement("div");
  taskElement.innerHTML = ``;

  return taskElement;
}

addTaskbtn.addEventListener("click", function () {
  let taskText = newtaskinp.value.trim();
  if (taskText !== "") {
    // console.log(taskText);
    let taskelement = createElement(taskText);
    todoList.appendChild(taskelement);
    newtaskinp.value = "";
  }
});
