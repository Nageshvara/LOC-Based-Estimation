var avgTotal = 0;

function myfunc() {
  var avg=(Number(document.getElementById('formGroupExampleInput').value)+4*Number(document.getElementById('formGroupExampleInput2').value)+Number(document.getElementById('formGroupExampleInput3').value))/6;
  avgTotal=avgTotal+avg;
}

function printing() {
  displayResult(avgTotal);
}

function displayResult(avgTotal) {
  locPerMonth = Number(document.getElementById('formGroupExampleInput5').value);
  labourRate = Number(document.getElementById('formGroupExampleInput6').value);
  costPerLoc = labourRate / locPerMonth;
  costOfProject = avgTotal * costPerLoc;
  effortOfProject = avgTotal / locPerMonth;
  document.getElementById('lcost').innerHTML = costPerLoc;
  document.getElementById('pcost').innerHTML = costOfProject;
  document.getElementById('effort').innerHTML = effortOfProject;
}
function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(-1);
  var cell4 = row.insertCell();
  cell1.innerHTML = Number(document.getElementById('formGroupExampleInput').value);
  cell2.innerHTML = Number(document.getElementById('formGroupExampleInput2').value);
  cell3.innerHTML = Number(document.getElementById('formGroupExampleInput3').value);
  cell4.innerHTML = (Number(document.getElementById('formGroupExampleInput').value)+4*Number(document.getElementById('formGroupExampleInput2').value)+Number(document.getElementById('formGroupExampleInput3').value))/6;
}
