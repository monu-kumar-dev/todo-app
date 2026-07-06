const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".input-section");
const errorMsg = document.querySelector(".errorMsg");

const totalCount = document.getElementById("total");
const pendingCount = document.getElementById("pending");
const completedCount = document.getElementById("completed");

const completedBtn = document.getElementById("completedBtn");
const pendingBtn = document.getElementById("pendingBtn");
const allBtn = document.getElementById("allBtn");

function addTodo() {
  if (todoInput.value === "" || todoInput.value.trim() === "") {
    errorMsg.innerText = "Please enter a task";
    return;
  }

  const taskItem = document.createElement("div");
  const taskText = document.createElement("p");
  taskItem.classList.add("task-item");
  taskText.classList.add("task-text");

  taskText.innerText = todoInput.value.trim();

  // taskItem.appendChild(taskText);

  //   Adding button
  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.type = "button";
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.classList.add("edit-btn");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

  taskActions.append(completeBtn, editBtn, deleteBtn);
  taskItem.append(taskText, taskActions);

  todoList.appendChild(taskItem);

  updateCounters();

  // clear inputBtn
  todoInput.value = "";

  // Handling complete btn
  completeBtn.addEventListener("click", () => {
    // taskItem.classList.add("task-completed");

    // if (taskItem.classList.contains("task-completed")) {
    //   taskItem.classList.remove("task-completed");
    // } else {
    //   taskItem.classList.add("task-completed");
    // }

    // In-short
    taskItem.classList.toggle("task-completed");
    updateCounters();
  });

  // Handling edit btn
  editBtn.addEventListener("click", () => {
    todoInput.value = taskText.innerText;
    todoInput.focus();
    taskItem.remove();

    updateCounters();
  });

  // Handling delete btn
  deleteBtn.addEventListener("click", () => {
    // User se confirmation mangne ke liye
    const isConfirmed = confirm("Are you sure you want to delete this task?");

    // Agar user "OK" click karta hai, to task delete ho jayega
    if (isConfirmed) {
      taskItem.remove();
      updateCounters();
    }
  });
}

function updateCounters() {
  // Get all todo items
  const allTaskItems = document.querySelectorAll(".task-item");

  // Get completed todo items
  const completedTaskItems = document.querySelectorAll(".task-completed");

  // Calculate counts
  const totalTasks = allTaskItems.length;
  const completedTasks = completedTaskItems.length;
  const pendingTasks = totalTasks - completedTasks;

  // Update UI
  totalCount.innerText = `Total: ${totalTasks}`;
  completedCount.innerText = `Completed: ${completedTasks}`;
  pendingCount.innerText = `Pending: ${pendingTasks}`;
}

todoInput.addEventListener("input", () => {
  errorMsg.innerText = "";
});

allBtn.addEventListener("click", () => {
  const allTaskItems = document.querySelectorAll(".task-item");

  allTaskItems.forEach((task) => {
    task.style.display = "flex";
  });
});

pendingBtn.addEventListener("click", () => {
  const allTaskItems = document.querySelectorAll(".task-item");

  allTaskItems.forEach((task) => {
    if (task.classList.contains("task-completed")) {
      // Hide completed task
      task.style.display = "none";
    } else {
      // show pending task
      task.style.display = "flex";
    }
  });
});

completedBtn.addEventListener("click", () => {
  const allTaskItems = document.querySelectorAll(".task-item");

  allTaskItems.forEach((task) => {
    if (task.classList.contains("task-completed")) {
      // Show completed task
      task.style.display = "flex";
    } else {
      // Hide pending task
      task.style.display = "none";
    }
  });
});

// addBtn.addEventListener("submit", addTodo);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
