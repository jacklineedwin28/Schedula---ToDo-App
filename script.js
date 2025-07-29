const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim(); //get task
  // check if empty say error , if not empty continue
  if (!task) {
    alert("Please write down a task");
    return;
  }
const li = document.createElement("li");

  // add task to list +delete+edit
  li.innerHTML = `
  <label>
    <input type="checkbox">
    <span>${task}</span>
  </label>
  <span class="edit-btn">Edit</span>
  <span class="delete-btn">Delete</span>
`;
// display in the list
listContainer.appendChild(li);

// clear the text field after enter/adding
inputBox.value = "";

const checkbox = li.querySelector("input");
const editBtn = li.querySelector(".edit-btn");
const taskSpan = li.querySelector("span");
const deleteBtn = li.querySelector(".delete-btn");

checkbox.addEventListener("click", function () {
  li.classList.toggle("completed", checkbox.checked);
  updateCounters();
});

editBtn.addEventListener("click", function () {
  const update = prompt("Edit task:", taskSpan.textContent);
   if (update !== null && update.trim() !== "") {
    taskSpan.textContent = update;
    li.classList.remove("completed");
    checkbox.checked = false; 
    updateCounters();
   
  }
});

deleteBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    updateCounters();
  }
});

updateCounters();
}

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}