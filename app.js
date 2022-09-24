
const hamburgerBtn = document.getElementById("hambuger__button");
const line = document.querySelectorAll(".line");
const nav = document.querySelector(".nav");
const animTitleSpan = document.querySelector(".accueil__title-span");


// Permet l'ajout de class et l'ouverture et l'animation des différents éléments.
const addClasslitActive = (variable, otherVariable) => {
  variable.addEventListener("click", () => {
    variable.classList.toggle("active");
    otherVariable.classList.toggle("slide");
  });
}

addClasslitActive(hamburgerBtn, nav);



//typewritter
new Typewriter(animTitleSpan, {
  loop: true,
  deleteSpeed: 20
})
  .changeDelay(20)
  .typeString(' <strong>HTML <span style="color: #f4c44e"><i class="fa-brands fa-html5"></i></span</strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString(' <strong>CSS <span style="color: #0068ba"><i class="fa-brands fa-css3-alt"></i></span</strong>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString(' <strong>SASS <span style="color: #c76395"><i class="fa-brands fa-sass"></i></span</strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .typeString(' <strong>Bootstrap <span style="color: #6f10ee"><i class="fa-brands fa-bootstrap"></i></span</strong>')
  .pauseFor(1000)
  .deleteChars(11)
  .typeString(' <strong>JavaScript <span style="color: #f4c44e"><i class="fa-brands fa-square-js"></i></span</strong>')
  .pauseFor(1000)
  .deleteChars(12)
  .typeString('<strong><span style="color: #3e4035">Node.</span><span style="color: #6ab849"><i class="fa-brands fa-node-js"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<strong style="color: #3e4035">Express </strong><span style= "color: #dd8a00"><i class="fa-solid fa-gears"></i></span>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<strong>MongoDB <span style= "color: #27ae60"><i class="fa-solid fa-leaf"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong><span style="color:#005b87">My</span><span style="color:#dd8a00">SQL</span></strong> <span style="color:#abaaab"><i class="fa-solid fa-database"> </i></span>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong><span style="color:#4181ed">S</span><span style="color:#ea4235">E</span><span style="color:#fabc05">O</span> <span><i class="fa-solid fa-magnifying-glass"></i></span></strong>')
  .pauseFor(1000)
  .deleteChars(7)
  .start()