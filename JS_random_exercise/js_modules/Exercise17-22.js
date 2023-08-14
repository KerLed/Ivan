//exercis17
let bool17 = true;
//exercis18
let bool18 = true;
//exercis19
let bool19 = true;
//exercis20
let bool20 = true;
//exercis21
let bool21 = true;
//exercis19
let bool22 = true;

function exercise17() {
  if (bool17 != false) {
    function hello1() {
      return "Привет, JavaScript!";
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer17";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = hello1();
    document.getElementById("exercise17").appendChild(pRezult);
    bool17 = !bool17;
  } else {
    document.getElementById("exer17").remove();
    bool17 = !bool17;
  }
}

function exercise18() {
  if (bool18 != false) {
    function hello2(name) {
      if (name == "") {
        return "Привет, гость!";
      } else {
        return `Привет, ${name}!`;
      }
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer18";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = hello2(document.getElementById("inpexer18").value);
    document.getElementById("exercise18").appendChild(pRezult);
    bool18 = !bool18;
  } else {
    document.getElementById("exer18").remove();
    bool18 = !bool18;
  }
}
function exercise19() {
  if (bool19 != false) {
    function mul(n, m) {
      if (isNaN(n * m)) {
        return "Ошибка!";
      } else {
        return `Произведение = ${n * m}!`;
      }
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer19";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = mul(
      document.getElementById("inpexer19.1").value,
      document.getElementById("inpexer19.2").value
    );
    document.getElementById("exercise19").appendChild(pRezult);
    bool19 = !bool19;
  } else {
    document.getElementById("exer19").remove();
    bool19 = !bool19;
  }
}
function exercise20() {
  if (bool20 != false) {
    function repeat(str, n) {
      if (isNaN(n * 2) || n == "" || str == "") {
        return "Ошибка!";
      } else {
        let rezult = "";
        for (let i = 0; i < n; i++) {
          rezult += str + " ";
        }
        return rezult;
      }
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer20";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = repeat(
      document.getElementById("inpexer20.1").value,
      document.getElementById("inpexer20.2").value
    );
    document.getElementById("exercise20").appendChild(pRezult);
    bool20 = !bool20;
  } else {
    document.getElementById("exer20").remove();
    bool20 = !bool20;
  }
}
function exercise21() {
  if (bool21 != false) {
    function rgb(a1, a2, a3) {
      if (isNaN(a1 * a2) || isNaN(a2 * a3)) {
        return "Ошибка!";
      } else {
        return `rgb(${a1 * 1},${a2 * 1},${a3 * 1})`;
      }
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer21";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = rgb(
      document.getElementById("inpexer21.1").value,
      document.getElementById("inpexer21.2").value,
      document.getElementById("inpexer21.3").value
    );
    document.getElementById("exercise21").appendChild(pRezult);
    bool21 = !bool21;
  } else {
    document.getElementById("exer21").remove();
    bool21 = !bool21;
  }
}
function exercise22() {
  if (bool22 != false) {
    function words(a) {
      let a1 = a / 1000000;
      let a2 = a1.toString().slice(-1);
      let arr = a1.toString().split("");
      if (a == "") {
        return "0 товаров";
      } else if (a < 0) {
        return "Мы не покупаем...";
      } else if (
        a2 == 0 ||
        a2 == 5 ||
        a2 == 6 ||
        a2 == 7 ||
        a2 == 8 ||
        a2 == 9 ||
        arr[arr.length - 2] == 1
      ) {
        return `${a} товаров`;
      } else if (a2 == 1) {
        if (arr[arr.length - 2] != 1) {
          return `${a} товар`;
        } else {
          return `${a} товаров`;
        }
      } else if (a2 == 2 || a2 == 3 || a2 == 4) {
        return `${a} товарa`;
      } else {
        return "Ошибка!";
      }
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer22";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = words(document.getElementById("inpexer22").value);
    document.getElementById("exercise22").appendChild(pRezult);
    bool22 = !bool22;
  } else {
    document.getElementById("exer22").remove();
    bool22 = !bool22;
  }
}
export {
  exercise17,
  exercise18,
  exercise19,
  exercise20,
  exercise21,
  exercise22,
};
