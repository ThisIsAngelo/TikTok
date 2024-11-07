const wrapper = document.querySelector(".wrapper");
const regis = document.getElementById("regis");
const login = document.getElementById("login");
const inputPass = document.getElementById("password")
const inputPassRegis = document.getElementById("password-regis")
const showPass = document.querySelector(".eye");

let state = false

regis.addEventListener("click", () => {
  wrapper.classList.add("active");
});

login.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

function showPassword(e) {
    e.stopPropagation();
    if (!state) {
      inputPass.setAttribute("type", "text");
      inputPassRegis.setAttribute("type", "text");
      state = true;
    } else {
      inputPass.setAttribute("type", "password");
      inputPassRegis.setAttribute("type", "password");
      state = false;
    }
  }
