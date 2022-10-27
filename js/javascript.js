// Author: Jacob Veber
// Email: jacob_veber@student.uml.edu

function update() {
  // Get numbers
  var minX = document.getElementById("minX").value;
  var maxX = document.getElementById("maxX").value;
  var minY = document.getElementById("minY").value;
  var maxY = document.getElementById("maxY").value;

  // Error Handling
  var errorDisplay = document.getElementById("error-msg");
  if (minY == '') {
    errorDisplay.innerHTML = 'Please Enter a minimum y value.';
    return;
  } else if (minY < -50 || minY > 50) {
    errorDisplay.innerHTML = 'Please Enter a minimum y value between -50 and 50.';
    return;
  } else if (maxY == '') {
    errorDisplay.innerHTML = 'Please Enter a maximum y value.';
    return;
  } else if (maxY < -50 || minY > 50) {
    errorDisplay.innerHTML = 'Please Enter a maximum y value between -50 and 50.';
    return;
  } else if (minX == '') {
    errorDisplay.innerHTML = 'Please Enter a minimum x value.';
    return;
  } else if (minX < -50 || minX > 50) {
    errorDisplay.innerHTML = 'Please Enter a minimum x value between -50 and 50.';
    return;
  } else if (maxX == '') {
    errorDisplay.innerHTML = 'Please Enter a maximum x value.';
    return;
  } else if (maxX < -50 || maxX > 50) {
    errorDisplay.innerHTML = 'Please Enter a maximum x value between -50 and 50.';
    return;
  } else if (minY > maxY) {
    errorDisplay.innerHTML = 'Please Enter a maximum y that is greater than minimum y.';
    return;
  } else if (minX > maxX) {
    errorDisplay.innerHTML = 'Please Enter a maximum x that is greater than minimum x.';
    return;
  } else {
    errorDisplay.innerHTML = '';
  }

  // Create Table
  var table = document.getElementById("mult-table");
  table.innerHTML = ""; // Clear any cells

  for (let i = 0; i <= maxY - minY + 1; i++) {
    // Iterate through rows
    var row = table.insertRow(i);
    for (let j = 0; j <= maxX - minX + 1; j++) {
      // Iterate through collumns
      var col = row.insertCell(j);

      if (i == 0 && j == 0) {
        // Corner Element
        col.innerHTML = "#";
      } else if (i == 0) {
        // Fill Top Headers
        col.innerHTML = parseInt(minX) + j - 1;
      } else if (j == 0) {
        // Fill Left Headers
        col.innerHTML = parseInt(minY) + i - 1;
      } else {
        // Multiply rows by collumns
        col.innerHTML = (parseInt(minY) + i - 1) * (parseInt(minX) + j - 1);
      }

      col.style.width = '100px';
    }
  }
}
