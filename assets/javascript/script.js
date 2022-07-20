// make report function
var data1;
var data2;
var data3;
var data4;

function makeReport() {
  // let data = [];
  data1 = document.getElementById("shed-a").value;
  data2 = document.getElementById("shed-b").value;
  data3 = document.getElementById("shed-c").value;
  data4 = document.getElementById("shed-d").value;

  var totalData = data1 + data2 + data3;
  var totalProduction = data1 + data2 + data3 + data4;

  // Daily Production output

  document.getElementById("output-data").innerHTML += "<br>";

  document.getElementById("output-data").innerHTML +=
    "<p>Your production for Shed A is" +
    " " +
    data1 +
    " " +
    "Litres per day</p>";

  document.getElementById("output-data").innerHTML +=
    "<p>Your production for Shed B is" +
    " " +
    data2 +
    " " +
    "Litres per day</p>";

  document.getElementById("output-data").innerHTML +=
    "<p>Your production for Shed C is" +
    " " +
    data3 +
    " " +
    "Litres per day</p>";

  document.getElementById("output-data").innerHTML +=
    "<p>Your pruduction for Shed D is" +
    " " +
    data4 +
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
  let aprIncome = totalProduction * 30 * 45;
  let mayIncome = totalProduction * 31 * 45;
  let junIncome = totalProduction * 30 * 45;
  let julIncome = totalProduction * 31 * 45;
  let augIncome = totalProduction * 31 * 45;
  let sepIncome = totalProduction * 30 * 45;
  let octIncome = totalProduction * 31 * 45;
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
    "<p>Your income for April is" + " " + aprIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for May is" + " " + mayIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for June is" + " " + junIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for July is" + " " + julIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for August is" + " " + augIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for September is" + " " + sepIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for October is" + " " + octIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>your income for November is" + " " + novIncome;
  document.getElementById("output-data").innerHTML +=
    "<p>Your income for december is" + " " + decIncome;
}
function resetPage() {
  document.getElementById("output-data").remove("innerHTML");
  location.reload();
}
