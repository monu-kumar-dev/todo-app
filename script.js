const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.querySelector(".todo-list");
const form = document.querySelector(".input-section");
const errorMsg = document.querySelector(".errorMsg");

function addTodo() {
  if (todoInput.value === "" || todoInput.value.trim() === "") {
    errorMsg.innerText = "Please enter a task";
    return;
  }

  errorMsg.innerText = "";

  const div = document.createElement("div");
  const p = document.createElement("p");
  div.classList.add("task-item");
  p.classList.add("task-text");

  p.innerText = todoInput.value.trim();
  // div.appendChild(p);

  //   Adding button
  const container = document.createElement("div");
  container.classList.add("task-actions");

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

  container.append(completeBtn, editBtn, deleteBtn);
  div.append(p, container);

  todoList.appendChild(div);

  // <div class="task-item">
  //   <p class="task-text">Learn JavaScript</p>
  //   <div class="task-actions">
  //     <button class="complete-btn">✓</button>

  //     <button class="edit-btn">✏️</button>

  //     <button class="delete-btn">🗑️</button>
  //   </div>
  // </div>;
}

// addBtn.addEventListener("submit", addTodo);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
  todoInput.value = "";
});
