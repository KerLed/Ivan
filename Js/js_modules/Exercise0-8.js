//exercise0
let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";
//exercise1
let a1, a2, a3, a4;
let b = true;
//exercise2
let a5,
  a6,
  a7,
  a8,
  a9,
  bool = true;
//exercise3
let height = 23,
  width = 10,
  s,
  bool3 = true;
//exercise4
let heightC = 10,
  DC = 4,
  v,
  bool4 = true;
//exercise5
let bool5 = true,
  n = 3,
  m = 4,
  k;
//exercise6
let bool6 = true,
  fa,
  fb,
  fc;
//exerrcise7
let bool7 = true,
  S,
  p,
  years,
  perepl;
function exercise0() {
  if (flag == true) {
    let pRezult = document.createElement("p");
    pRezult.id = "exer0";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText =
      `str = ${typeof str}; \n` +
      `num = ${typeof num}; \n` +
      `flag = ${typeof flag}; \n` +
      `txt = ${typeof txt}. `;
    document.getElementById("exercise0").appendChild(pRezult);
    flag = !flag;
  } else {
    document.getElementById("exer0").remove();
    flag = !flag;
  }
}
function exercise1() {
  if (b != false) {
    a1 = 5 + 3;
    a2 = 5 - 3;
    a3 = 5 * 3;
    a4 = 5 / 3;
    let pRezult = document.createElement("p");
    pRezult.id = "exer1";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText =
      `5 + 3 = ${a1}; \n` +
      `5 - 3 = ${a2}; \n` +
      `5 * 3 = ${a3}; \n` +
      `5 / 3 = ${a4}. \n`;
    document.getElementById("exercise1").appendChild(pRezult);
    b = !b;
  } else {
    document.getElementById("exer1").remove();
    b = !b;
  }
}
function exercise2() {
  if (bool != false) {
    a5 = 5 % 3;
    a6 = 3 % 5;
    a7 = 5 + "3";
    a8 = "5" + 3;
    a9 = 75 + "кг";
    let pRezult = document.createElement("p");
    pRezult.id = "exer2";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText =
      `5 % 3 = ${a5}; \n` +
      `3 % 5 = ${a6}; \n` +
      `5 + '3' = ${a7}; \n` +
      `'5' + 3 = ${a8}; \n` +
      `75 + "кг" = ${a9}.`;
    document.getElementById("exercise2").appendChild(pRezult);
    bool = !bool;
  } else {
    document.getElementById("exer2").remove();
    bool = !bool;
  }
}
function exercise3() {
  if (bool3 != false) {
    s = height * width;
    let pRezult = document.createElement("p");
    pRezult.id = "exer3";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `Площадь прямоугольника = ${s}см..`;
    document.getElementById("exercise3").appendChild(pRezult);
    bool3 = !bool3;
  } else {
    document.getElementById("exer3").remove();
    bool3 = !bool3;
  }
}
function exercise4() {
  if (bool4 != false) {
    v = Math.round(3.14 * Math.pow(DC, 2) * heightC);
    let pRezult = document.createElement("p");
    pRezult.id = "exer4";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `Объем цилиндра  = ${v}.`;
    document.getElementById("exercise4").appendChild(pRezult);
    bool4 = !bool4;
  } else {
    document.getElementById("exer4").remove();
    bool4 = !bool4;
  }
}
function exercise5() {
  if (bool5 != false) {
    k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2), 2);
    let pRezult = document.createElement("p");
    pRezult.id = "exer5";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `гипотенуза  = ${k}.`;
    document.getElementById("exercise5").appendChild(pRezult);
    bool5 = !bool5;
  } else {
    document.getElementById("exer5").remove();
    bool5 = !bool5;
  }
}
function exercise6() {
  if (bool6 != false) {
    fa = 1;
    fb = 1;
    for (let i = 3; i <= 12; i++) {
      fc = fa + fb;
      fa = fb;
      fb = fc;
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer6";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `12-ое число последовательности Фибоначи (не учитывая 0)  = ${fb}.`;
    document.getElementById("exercise6").appendChild(pRezult);
    bool6 = !bool6;
  } else {
    document.getElementById("exer6").remove();
    bool6 = !bool6;
  }
}
function exercise7() {
  if (bool7 != false) {
    S = document.getElementById("sumKred").value;
    p = document.getElementById("stavKred").value;
    years = document.getElementById("srokKred").value;

    let P = p / 1200;
    let a = (P * Math.pow(1 + P, years)) / (Math.pow(1 + P, years) - 1);
    a = Math.ceil(a * 10000) / 10000;
    let mons_p = a * S;
    let total_p = years * mons_p;
    perepl = total_p - S;

    let pRezult = document.createElement("p");
    pRezult.id = "exer7";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `Переплата  = ${perepl};\n Ежемесячный платёж = ${mons_p};\n Всего надо будет заплатить = ${total_p}.`;
    document.getElementById("exercise7").appendChild(pRezult);
    bool7 = !bool7;
  } else {
    S = document.getElementById("sumKred").value;
    p = document.getElementById("stavKred").value;
    years = document.getElementById("srokKred").value;

    let P = p / 1200;
    let a = (P * Math.pow(1 + P, years)) / (Math.pow(1 + P, years) - 1);
    a = Math.ceil(a * 10000) / 10000;
    let mons_p = a * S;
    let total_p = years * mons_p;
    perepl = total_p - S;
    document.getElementById(
      "exer7"
    ).innerHTML = `Переплата  = ${perepl};<br> Ежемесячный платёж = ${mons_p};<br> Всего надо будет заплатить = ${total_p}.`;
  }
}
export {
  exercise0,
  exercise1,
  exercise2,
  exercise3,
  exercise4,
  exercise5,
  exercise6,
  exercise7,
};
