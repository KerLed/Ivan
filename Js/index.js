let exercise = document.getElementsByClassName("exercise");
let Exercise = document.getElementsByClassName("Exercise");
for (i = 0; i < exercise.length; i++) {
  exercise[i].hidden = "hidden";
}

function ExerciseX(x) {
  let elem = document.getElementById(`${x}`);
  elem.hidden = !elem.hidden;

  if (elem.hidden == false) {
    for (i = 0; i < Exercise.length; i++) {
      Exercise[i].style.display = "none";
    }

    // let element = x.slice(-1);
    elem.style.minHeight = "500px";
    document.getElementById("main").style.grid = "100% / auto";
    Exercise[x.slice(-1)].style.display = "block";
  } else {
    document.getElementById("main").style.grid =
      "20% / auto auto auto auto auto";
    for (i = 0; i < Exercise.length; i++) {
      Exercise[i].style = "display:block;";
    }
  }
}
