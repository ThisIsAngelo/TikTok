const button = document.querySelectorAll("button")

button.forEach((btn) => {
    btn.addEventListener("click", () => {
        button.forEach((btn) => btn.classList.remove("active"))

        btn.classList.add("active")
    })
})