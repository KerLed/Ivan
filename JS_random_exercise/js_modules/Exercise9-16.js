//exercise8
let n,
  m,
  bool8 = true;
//exercis9
let bool9 = true;
//exercis10
let bool10 = true;
//exercis11
let bool11 = true;
//exercis12
let bool12 = true;
//exercis13
let bool13 = true;
//exercis14
let bool14 = true;
//exercis15
let bool15 = true;
//exercis16
let bool16 = true;
function exercise8() {
  if (bool8 != false) {
    m = Math.floor(Math.random() * 100);
    if (m < 50) {
      n = "Маленькое";
    } else {
      n = "Большое";
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer8";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = ` m = ${m};\n n  = ${n}.`;
    document.getElementById("exercise8").appendChild(pRezult);
    bool8 = !bool8;
  } else {
    document.getElementById("exer8").remove();
    bool8 = !bool8;
  }
}
function exercise9() {
  if (bool9 != false) {
    let i = 2;
    let kol = 0;
    let pRezult = document.createElement("p");
    pRezult.id = "exer9";
    pRezult.style = "margin-top:10px; font-size:20px";
    while (i < 9) {
      pRezult.innerHTML += `${i++};<br>`;
      kol++;
    }
    pRezult.innerHTML += ` Wile выполнился ${kol} рааз`;
    document.getElementById("exercise9").appendChild(pRezult);
    bool9 = !bool9;
  } else {
    document.getElementById("exer9").remove();
    bool9 = !bool9;
  }
}
function exercise10() {
  if (bool10 != false) {
    let i = 45;
    let kol = 0;
    let pRezult = document.createElement("p");
    pRezult.id = "exer10";
    pRezult.style = "margin-top:10px; font-size:20px";
    while (i <= 68) {
      pRezult.innerHTML += `${i++}  `;
      kol++;
      if (kol == 4) {
        pRezult.innerHTML += "<br>";
        kol = 0;
      }
    }
    document.getElementById("exercise10").appendChild(pRezult);
    bool10 = !bool10;
  } else {
    document.getElementById("exer10").remove();
    bool10 = !bool10;
  }
}
function exercise11() {
  if (bool11 != false) {
    let i = 45;
    let kol = 0;
    let pRezult = document.createElement("p");
    pRezult.id = "exer11";
    pRezult.style = "margin-top:10px; font-size:20px";
    while (i <= 670) {
      i++;

      if (i % 10 == 0) {
        pRezult.innerHTML += `${i}  `;
        kol++;
      } else if (kol == 10) {
        pRezult.innerHTML += "<br>";
        kol = 0;
      }
    }
    document.getElementById("exercise11").appendChild(pRezult);
    bool11 = !bool11;
  } else {
    document.getElementById("exer11").remove();
    bool11 = !bool11;
  }
}
function exercise12() {
  if (bool12 != false) {
    let kol = 0;
    let exercise = 0;
    let pRezult = document.createElement("p");
    pRezult.id = "exer12";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerHTML += `Задание 11: <br>`;
    for (let i = 45; i <= 670; i++) {
      if (exercise == 0) {
        pRezult.innerHTML += `${i++}  `;
        kol++;
        if (kol == 4) {
          pRezult.innerHTML += "<br>";
          kol = 0;
        }
        if (i == 68) {
          if (kol != 0) {
            pRezult.innerHTML += "<br>";
          }

          pRezult.innerHTML += `Задание 12: <br>`;
          i = 45;
          kol = 0;
          exercise = 1;
        }
      } else if (exercise == 1) {
        if (i % 10 == 0) {
          pRezult.innerHTML += `${i}  `;
          kol++;
        } else if (kol == 10) {
          pRezult.innerHTML += "<br>";
          kol = 0;
        }
      }
    }
    document.getElementById("exercise12").appendChild(pRezult);
    bool12 = !bool12;
  } else {
    document.getElementById("exer12").remove();
    bool12 = !bool12;
  }
}
function exercis13() {
  if (bool13 != false) {
    let n = Math.floor(Math.random() * 10);
    let pRezult = document.createElement("p");
    pRezult.id = "exer13";
    pRezult.style = "margin-top:10px; font-size:20px";
    switch (n) {
      case 0:
        pRezult.innerHTML += `Ноль`;
        break;
      case 1:
        pRezult.innerHTML += `Один`;
        break;
      case 2:
        pRezult.innerHTML += `Два`;
        break;
      case 3:
        pRezult.innerHTML += `Три`;
        break;
      case 4:
        pRezult.innerHTML += `Четыре`;
        break;
      case 5:
        pRezult.innerHTML += `Пять`;
        break;
      case 6:
        pRezult.innerHTML += `Шесть`;
        break;
      case 7:
        pRezult.innerHTML += `Семь`;
        break;
      case 8:
        pRezult.innerHTML += `Восемь`;
        break;
      case 9:
        pRezult.innerHTML += `Девять`;
        break;
    }
    document.getElementById("exercise13").appendChild(pRezult);
    bool13 = !bool13;
  } else {
    document.getElementById("exer13").remove();
    bool13 = !bool13;
  }
}
function exercise14() {
  if (bool14 != false) {
    let pRezult = document.createElement("p");
    pRezult.id = "exer14";
    pRezult.style = "margin-top:10px; font-size:20px";
    document.getElementById("exercise14").appendChild(pRezult);
    for (let i = 0; i < 10; i++) {
      let img = document.createElement("img");
      img.src = ".//images/ImageE14.jpg";
      img.style = "width: 100px; margin-right:10px;";
      pRezult.appendChild(img);
    }
    bool14 = !bool14;
  } else {
    document.getElementById("exer14").remove();
    bool14 = !bool14;
  }
}
function exercise15() {
  if (bool15 != false) {
    let size = document.getElementById("IinpE15").value;
    let unit = document.getElementById("ISelecE15").value;
    let b = 0;
    let pRezult = document.createElement("p");
    pRezult.id = "exer15";
    pRezult.style = "margin-top:10px; font-size:20px";
    switch (unit) {
      case "Кб":
        b = size * 1024;
        if (isNaN(b) || b == 0) {
          alert("Ошибка!");
        } else {
          pRezult.innerHTML = `В ${size}${unit} содержится ${b} байт`;
          document.getElementById("exercise15").appendChild(pRezult);
          bool15 = !bool15;
        }
        break;
      case "Мб":
        b = size * 1000 * 1024;
        if (isNaN(b) || b == 0) {
          alert("Ошибка!");
        } else {
          pRezult.innerHTML = `В ${size}${unit} содержится ${b} байт`;
          document.getElementById("exercise15").appendChild(pRezult);
          bool15 = !bool15;
        }
        break;
      case "Гб":
        b = size * 1000 * 1000 * 1024;
        if (isNaN(b) || b == 0) {
          alert("Ошибка!");
        } else {
          pRezult.innerHTML = `В ${size}${unit} содержится ${b} байт`;
          document.getElementById("exercise15").appendChild(pRezult);
          bool15 = !bool15;
        }
        break;
    }
  } else {
    document.getElementById("exer15").remove();
    bool15 = !bool15;
  }
}
function exercise16() {
  if (bool16 != false) {
    let date = new Date();
    let year = document.createElement("h3");
    year.innerHTML = date.getFullYear();
    let month = document.createElement("h3");
    month.innerHTML = new Date().toLocaleString("ru", {
      month: "long",
    });
    document.getElementById("exercise16").appendChild(year);
    document.getElementById("exercise16").appendChild(month);

    let pRezult = document.createElement("table");
    pRezult.id = "exer16";

    let getDaysInMonth = function (month, year) {
      return new Date(year, month, 0).getDate();
    };
    let tr = document.createElement("tr");
    pRezult.appendChild(tr);
    for (
      let i = 1;
      i <= getDaysInMonth(date.getMonth() + 1, date.getFullYear());
      i++
    ) {
      if (i % 7 != 0) {
        let td = document.createElement("td");
        td.innerHTML = i;
        pRezult.lastChild.appendChild(td);
      } else if (i % 7 == 0) {
        let td = document.createElement("td");
        td.innerHTML = i;

        pRezult.lastChild.appendChild(td);
        let tr = document.createElement("tr");
        pRezult.appendChild(tr);
      }
    }

    pRezult.style = "margin-top:10px; font-size:20px";

    document.getElementById("exercise16").appendChild(pRezult);
    bool16 = !bool16;
  } else {
    document.getElementById("exer16").remove();
    bool16 = !bool16;
  }
}
export {
  exercise8,
  exercise9,
  exercise10,
  exercise11,
  exercise12,
  exercis13,
  exercise14,
  exercise15,
  exercise16,
};
