
const hamburgerBtn = document.getElementById("hambuger__button");
const line = document.querySelectorAll(".line");
const nav = document.querySelector(".nav");


// Permet l'ajout de class et l'ouverture et l'animation des différents éléments.
const addClasslitActive = (variable, otherVariable) => {
  variable.addEventListener("click", () => {
    variable.classList.toggle("active");
    otherVariable.classList.toggle("slide");
  });
}

addClasslitActive(hamburgerBtn, nav);


