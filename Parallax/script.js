let leftSide = document.getElementById("left-side");
let rightSide = document.getElementById("right-side");
let planet = document.getElementById("planet");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  leftSide.style.left = value * -1 + "px";
  rightSide.style.right = value * -1 + "px";
  planet.style.transform = `translateY(${value * 1}px) rotate(${value * .3}deg)`
});