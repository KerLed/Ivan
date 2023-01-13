//exercise8
let n,
  m,
  bool8 = true;
//exercis9
let bool9 = true;
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
export { exercise8, exercise9 };
