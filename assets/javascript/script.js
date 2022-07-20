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
  tdProduction +
  " " +
  "Litres per day</p>";
