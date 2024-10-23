const wrapper = document.querySelector(".wrapper");
const eye = document.getElementById("eye");
const passwordLogin = document.getElementById("password-login");
const passwordRegis = document.getElementById("password-regis");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const loginButton = document.getElementById("login-button");

let state = false;

function change(e) {
  e.stopPropagation();
  wrapper.classList.toggle("active");
}

function popup(e) {
  e.stopPropagation();
  wrapper.classList.toggle("popup");
}

function showPassword(e) {
  e.stopPropagation();
  if (!state) {
    passwordLogin.setAttribute("type", "text");
    passwordRegis.setAttribute("type", "text");
    state = true;
  } else {
    passwordLogin.setAttribute("type", "password");
    passwordRegis.setAttribute("type", "password");
    state = false;
  }
}

document.addEventListener("click", (event) => {
  const isClickInside =
    loginButton.contains(event.target) || wrapper.contains(event.target);
  if (!isClickInside) {
    wrapper.classList.remove("popup");
  }
});
