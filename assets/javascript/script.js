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
