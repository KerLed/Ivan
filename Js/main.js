import AllExercise from "./js_modules/AllExercise.js";

let exercise = document.getElementsByClassName("exercise");
let Exercise = document.getElementsByClassName("Exercise");

function ExerciseX(x) {
  let elem = document.getElementById(`${x}`);
  elem.hidden = !elem.hidden;

  if (elem.hidden == false) {
    for (let i = 0; i < Exercise.length; i++) {
      Exercise[i].style.display = "none";
      Exercise[i].parentNode.parentNode.style.display = "none";
    }
    elem.style.minHeight = "300px";
    if (x.length == 9) {
      Exercise[x.slice(-1)].parentNode.style.grid = "100% / auto";
      Exercise[x.slice(-1)].style.display = "block";
      Exercise[x.slice(-1)].parentNode.parentNode.style.display = "block";
    } else if (x.length == 10) {
      Exercise[x.slice(x.length - 2)].parentNode.style.grid = "100% / auto";
      Exercise[x.slice(x.length - 2)].style.display = "block";
      Exercise[x.slice(x.length - 2)].parentNode.parentNode.style.display =
        "block";
    }
  } else {
    if (x.length == 9) {
      Exercise[x.slice(x.length - 1)].parentNode.style =
        "display: grid;grid-template-columns: repeat(5, 20%);grid-column-gap: 20px;";
    } else if (x.length == 10) {
      Exercise[x.slice(x.length - 2)].parentNode.style =
        "display: grid;grid-template-columns: repeat(5, 20%);grid-column-gap: 20px;";
    }
    for (let i = 0; i < Exercise.length; i++) {
      Exercise[i].style = "display:block;";

      Exercise[i].parentNode.parentNode.style = "block";
    }
  }
}
for (let i = 0; i < Exercise.length; i++) {
  let elem = document.createElement("button");
  elem.className = "btn";
  elem.style = "margin:20px 0 20px 15px";
  elem.innerHTML = `Задание${i + 1}`;
  elem.addEventListener("click", () => ExerciseX(`exercise${i}`));

  Exercise[i].appendChild(elem);
}
for (let i = 0; i < exercise.length; i++) {
  let elem = document.createElement("button");
  elem.className = "btn";
  elem.innerHTML = "Пуск";
  elem.addEventListener("click", () => AllExercise(i));
  exercise[i].appendChild(elem);
}
for (let i = 0; i < exercise.length; i++) {
  exercise[i].hidden = "hidden";
}
