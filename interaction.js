const buttons = document.querySelectorAll(".btn");
const navHandle = document.querySelector("nav");

function handleNav() {
  navHandle.classList.toggle('nav-handle')

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("btn-open");
    buttons[i].classList.toggle("btn-close");
  }
}
