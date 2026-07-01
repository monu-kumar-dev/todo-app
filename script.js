const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".input-section");
const errorMsg = document.querySelector(".errorMsg");

const totalTasks = document.getElementById("total");
const pendingTasks = document.getElementById("pending");
const completedTasks = document.getElementById("completed");

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

  // clear inputBtn
  todoInput.value = "";

  // <div class="task-item">
  //   <p class="task-text">Learn JavaScript</p>
  //   <div class="task-actions">
  //     <button class="complete-btn">✓</button>

  //     <button class="edit-btn">✏️</button>

  //     <button class="delete-btn">🗑️</button>
  //   </div>
  // </div>;

  // Handling complete btn
  completeBtn.addEventListener("click", () => {
    // div.classList.add("task-completed");

    // if (div.classList.contains("task-completed")) {
    //   div.classList.remove("task-completed");
    // } else {
    //   div.classList.add("task-completed");
    // }

    // In-short
    taskItem.classList.toggle("task-completed");
  });

  // Handling edit btn
  editBtn.addEventListener("click", () => {
    todoInput.value = taskText.innerText;
    todoInput.focus();
    taskItem.remove();
  });

  // Handling delete btn
  deleteBtn.addEventListener("click", () => {
    // User se confirmation mangne ke liye
    const isConfirmed = confirm("Are you sure you want to delete this task?");

    // Agar user "OK" click karta hai, to task delete ho jayega
    if (isConfirmed) {
      taskItem.remove();
    }
  });
}

todoInput.addEventListener("input", () => {
  errorMsg.innerText = "";
});

// addBtn.addEventListener("submit", addTodo);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
