//exercise23
let bool23 = true;
const city1 = {
  name: "ГородN",
  population: "10 млн.",
};
//exercise24
let bool24 = true;
const city2 = {
  name: "ГородM",
  population: "1e6",
};
//exercise25
let bool25 = true;
//exercise26
let bool26 = true;
//exercise27
let bool27 = true;
const obj = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    return "Метод 3";
  },
};
//exercise28
let bool28;
let d1 = [45,78,10,3]
//exercise29
let bool29 = true,summ2 = 0;
let d2 = [45,78,10,3]
//exercise30
let bool30 = true,summ3 = 0;
let d3 = [45,78,10,3]


function exercise23() {
  if (bool23 != false) {
    let pRezult = document.createElement("p");
    pRezult.id = "exer23";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = city1.name + ":" + city1.population;
    document.getElementById("exercise23").appendChild(pRezult);
    bool23 = !bool23;
  } else {
    document.getElementById("exer23").remove();
    bool23 = !bool23;
  }
}
function exercise24() {
  if (bool24 != false) {
    let pRezult = document.createElement("p");
    pRezult.id = "exer24";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = city2.name + ":" + city2.population;
    document.getElementById("exercise24").appendChild(pRezult);
    bool24 = !bool24;
  } else {
    document.getElementById("exer24").remove();
    bool24 = !bool24;
  }
}
function exercise25() {
  if (bool25 != false) {
    city1.getName = () => {
      return city1.name;
    };
    city2.getName = () => {
      return city2.name;
    };
    let pRezult = document.createElement("p");
    pRezult.id = "exer25";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText =
      "city1.name: " +
      city1.getName() +
      "\n" +
      "city2.name: " +
      city2.getName();
    document.getElementById("exercise25").appendChild(pRezult);
    bool25 = !bool25;
  } else {
    document.getElementById("exer25").remove();
    bool25 = !bool25;
  }
}

function exercise26() {
  if (bool26 != false) {
    city1.exportStr = () => {
      return `name = ${city1.name} \n population=${city1.population}\n`;
    };
    city2.exportStr = () => {
      return `name = ${city2.name} \n population=${city2.population}\n`;
    };
    let pRezult = document.createElement("p");
    pRezult.id = "exer26";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = city1.exportStr() + city2.exportStr();
    document.getElementById("exercise26").appendChild(pRezult);
    bool26 = !bool26;
  } else {
    document.getElementById("exer26").remove();
    bool26 = !bool26;
  }
}
function exercise27() {
  if (bool27 != false) {
    let pRezult = document.createElement("p");
    pRezult.id = "exer27";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = obj.method1().method2().method3();
    document.getElementById("exercise27").appendChild(pRezult);
    bool27 = !bool27;
  } else {
    document.getElementById("exer27").remove();
    bool27 = !bool27;
  }
}
function exercise28() {
  if (bool28 != false) {
    d1[7] = 100
    let pRezult = document.createElement("p");
    pRezult.id = "exer28";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `Весь массив = ${d1}\n d1[6] = ${d1[6]}\n d1[7] = ${d1[7]}`;
    document.getElementById("exercise28").appendChild(pRezult);
    bool28 = !bool28;
  } else {
    document.getElementById("exer28").remove();
    bool28 = !bool28;
  }
}
function exercise29() {
  if (bool29 != false) {
    for (let i = 0;i<d2.length;i++){
      summ2 += d2[i] 
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer29";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `Сумма элементов массива = ${summ2}`;
    document.getElementById("exercise29").appendChild(pRezult);
    bool29 = !bool29;
  } else {
    document.getElementById("exer29").remove();
    summ2 = 0
    bool29 = !bool29;
  }
}
function exercise30() {
  if (bool30 != false) {
    d3[4] = 100;
    for (let key in d3){
      summ3 += d3[key] 
    }
    let pRezult = document.createElement("p");
    pRezult.id = "exer30";
    pRezult.style = "margin-top:10px; font-size:20px";
    pRezult.innerText = `Сумма элементов массива = ${summ3}`;
    document.getElementById("exercise30").appendChild(pRezult);
    bool30 = !bool30;
  } else {
    document.getElementById("exer30").remove();
    summ3 = 0
    bool30 = !bool30;
  }
}

export { exercise23, exercise24, exercise25, exercise26, exercise27, exercise28,exercise29,exercise30 };
