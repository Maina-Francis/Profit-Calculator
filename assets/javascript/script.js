// make report function

function makeReport() {
  let data = [];
  data[0] = parseInt(document.getElementById("shed-a").value);
  data[1] = parseInt(document.getElementById("shed-b").value);
  data[2] = parseInt(document.getElementById("shed-c").value);
  data[3] = parseInt(document.getElementById("shed-d").value);
}

var totalData = data[0] + data[1] + data[2];
var totalProduction = data[0] + data[1] + data[2] + data[3];

// Daily Production output

document.getElementById("output-data").innerHTML += "<br>";

document.getElementById("output-data").innerHTML +=
  "<p>Your production for Shed A is" +
  " " +
  data[0] +
  " " +
  "Litres per day</p>";

document.getElementById("output-data").innerHTML +=
  "<p>Your production for Shed B is" +
  " " +
  data[1] +
  " " +
  "Litres per day</p>";

document.getElementById("output-data").innerHTML +=
  "<p>Your production for Shed C is" +
  " " +
  data[2] +
  " " +
  "Litres per day</p>";

document.getElementById("output-data").innerHTML +=
  "<p>Your pruduction for Shed D is" +
  " " +
  data[3] +
  " " +
  "Litres per day</p>";

document.getElementById("output-data").innerHTML +=
  "<p>The total production is" +
  " " +
  totalProduction +
  " " +
  "Litres per day</p>";

//weekly total liters
let weeklyIncome = totalProduction * 7 * 45;
let yearlyIncome = totalProduction * 365 * 45;
document.getElementById("output-data").innerHTML += "<hr>";
document.getElementById("output-data").innerHTML +=
  "<p>Your weekly earnings will be Ksh." + " " + weeklyIncome + "</p>";
document.getElementById("output-data").innerHTML +=
  "<p>Your weekly earnings will be Ksh." + yearlyIncome;
document.getElementById("output-data").innerHTML += "<hr>";

//leap year monthly totals Ksh.
let janIncome = totalProduction * 31 * 45;
let febIncome = totalProduction * 29 * 45;
let marchIncome = totalProduction * 31 * 45;
let aprincome = totalProduction * 30 * 45;
let mayIncome = totalProduction * 31 * 45;
let junincome = totalProduction * 30 * 45;
let julIncome = totalProduction * 31 * 45;
let augIncome = totalProduction * 31 * 45;
let sepIncome = totalProduction * 30 * 45;
let octincome = totalProduction * 31 * 45;
let novIncome = totalProduction * 30 * 45;
let decIncome = totalProduction * 31 * 45;

document.getElementById("output-data").innerHTML += "<br>";
document.getElementById("output-data").innerHTML += "<hr>";
document.getElementById("output-data").innerHTML +=
  "<p>Your income for January is" + " " + janIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for February is" + " " + febIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for March is" + " " + marchIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for April is" + " " + aprincome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for May is" + " " + mayIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for June is" + " " + junincome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for July is" + " " + julIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for August is" + " " + augIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for September is" + " " + sepIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for October is" + " " + octincome;
document.getElementById("output-data").innerHTML +=
  "<p>your income for November is" + " " + novIncome;
document.getElementById("output-data").innerHTML +=
  "<p>Your income for december is" + " " + decIncome;

function resetPage() {
  document.getElementById("outputData").remove("innerHTML");
  location.reload();
}
