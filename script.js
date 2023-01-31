const form = document.querySelector("#form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  if (!taskInput.value) return;

  const task = document.createElement("li");
  task.innerHTML = `
    ${taskInput.value} 
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(task);
  taskInput.value = "";

  task.querySelector(".delete-btn").addEventListener("click", removeTask);
}

function removeTask(e) {
  e.target.parentElement.remove();
}
