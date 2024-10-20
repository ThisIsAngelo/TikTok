const btn = document.getElementById("btn");
const dropdownContent = document.getElementById("dropdown-content");
const caret = document.getElementById("caret");

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  const contentHeight = dropdownContent.scrollHeight;

  if (dropdownContent.style.maxHeight) {
    dropdownContent.style.maxHeight = null;
    caret.classList.toggle("rotate-caret");
  } else {
    dropdownContent.style.maxHeight = contentHeight + "px";
    caret.classList.toggle("rotate-caret");
  }
});

// Dropdown will close if we click outside of the dropdown
document.addEventListener("click", (event) => {
  const isClickInside =
    btn.contains(event.target) || dropdownContent.contains(event.target);

  if (!isClickInside) {
    dropdownContent.style.maxHeight = null;
    caret.classList.remove("rotate-caret");
  }
});
