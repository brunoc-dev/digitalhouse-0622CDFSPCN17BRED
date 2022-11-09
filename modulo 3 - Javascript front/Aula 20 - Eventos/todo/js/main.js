//selecionando o botão de Add
const buttonAdd = document.querySelector("#btnAdd");
//selecionando o input
const inputTask = document.querySelector("#form12");

const tasklist = document.querySelector(".task-list");

function checkTask(taskLi) {
  taskLi.classList.add("done");
}

function createTask(task) {
  const li = document.createElement("li");
  li.setAttribute("class", "task-item");

  const imgClose = document.createElement("img");
  imgClose.setAttribute("src", "/icons/close.png");

  const imgCheck = document.createElement("img");
  imgCheck.setAttribute("src", "/icons/check.png");

  imgCheck.onclick = () => {
    checkTask(li);
  };

  const p = document.createElement("p");
  p.textContent = task;

  li.appendChild(imgClose);
  li.appendChild(p);
  li.appendChild(imgCheck);

  tasklist.appendChild(li);
}

buttonAdd.onclick = () => {
  //pegando o valor do input
  const newTask = inputTask.value;

  createTask(newTask);

  inputTask.value = "";
};
