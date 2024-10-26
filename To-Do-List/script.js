const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("li-container");

function addTodo() {
  if (inputBox.value.trim() === "") {
    alert("Input is empty!");
    return;
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    saveData();
  }
}

inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showtodo() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showtodo();
