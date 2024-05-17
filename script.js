const close = document.getElementById("close");

const open = document.getElementById("open");

const modal = document.getElementById("modal");

open.addEventListener('click',() => modal.classList.add("show-form"));
close.addEventListener('click',() => modal.classList.remove("show-form"));

window.addEventListener("click", (e) => {
    e.target === modal ? modal.classList.remove("show-modal") : false;
})

