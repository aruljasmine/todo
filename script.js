/*const input = document.getElementById("taskinput");
const button =document.getElementById("btn");
const tasklist =document.getElementById("listoftask");

let tasks =JSON.parse(localStorage.getItem("tasks")) || [];

function entertask()
{
    tasklist.innerHTML = "";
    tasks.forEach ((listoftask,index) =>{
        const li = document.createElement("li");
        li.textContent =tasklist.textContent;
     if (task.completed) li.classList.add("completed");

    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
     
     });
      const delBtn = document.createElement("button");
    delBtn.textContent = "";
    delBtn.onclick = () =>
         {
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  tasks.push({ text: input.value, completed: false });
  input.value = "";
  saveTasks();
});

entertask();*/
//alert("JS connected!");

const input = document.getElementById("taskinput");
const button = document.getElementById("btn");
const tasklist = document.getElementById("listoftask");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function entertask() {
  tasklist.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // Toggle complete
    li.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "undo";

    delBtn.onclick = (e) => {
      e.stopPropagation(); // prevent toggle
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(delBtn);
    tasklist.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  entertask();
}

button.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  saveTasks();
});

// Load tasks on page refresh
entertask();
