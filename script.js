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

  const button1 = document.createElement("button");
  button1.type = "button";
  button1.classList.add("complete-btn");
  button1.innerHTML = '<i class="fa-solid fa-check"></i>';

  const button2 = document.createElement("button");
  button2.type = "button";
  button2.classList.add("edit-btn");
  button2.innerHTML = '<i class="fa-solid fa-pen"></i>';

  const button3 = document.createElement("button");
  button3.type = "button";
  button3.classList.add("delete-btn");
  button3.innerHTML = '<i class="fa-solid fa-trash"></i>';

  container.append(button1, button2, button3);
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
