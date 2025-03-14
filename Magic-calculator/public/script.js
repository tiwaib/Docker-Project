function magicsquare() {
  var constantmatrix = [
    [0, 0, 0, 0],
    [1, -1, -3, 3],
    [-2, 2, 2, -2],
    [1, -1, 1, -1],
  ];

  // Retrieve user inputs
  var r11 = document.getElementById("dd").valueAsNumber || 0;
  var r12 = document.getElementById("mm").valueAsNumber || 0;
  var r21 = document.getElementById("yyyy").valueAsNumber || 0;
  var r13 = Math.floor(r21 * 0.01);
  var r14 = r21 - r13 * 100;

  var variablematrix = [
    [r11, r12, r13, r14],
    [r14, r13, r12, r11],
    [r12, r11, r14, r13],
    [r13, r14, r11, r12],
  ];

  var result = [];

  for (let i = 0; i < variablematrix.length; i++) {
    result[i] = [];
    for (let j = 0; j < variablematrix[i].length; j++) {
      result[i][j] = variablematrix[i][j] + constantmatrix[i][j];

      if (result[i][j] >= 0 && result[i][j] <= 9) {
        result[i][j] = "0" + result[i][j];
      }
    }
  }

  let ids = ["r1c1", "r1c2", "r1c3", "r1c4",
             "r2c1", "r2c2", "r2c3", "r2c4",
             "r3c1", "r3c2", "r3c3", "r3c4",
             "r4c1", "r4c2", "r4c3", "r4c4"];

  let index = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      document.getElementById(ids[index]).innerHTML = result[i][j];
      index++;
    }
  }

  document.getElementById("node").innerHTML =
    "Your magic number is: " + (r11 + r12 + r13 + r14) + "<br>" +
    "Adding any row, column, or diagonal will give you your magic number." + "<br>" +
    "To learn more about Ramanujan's magic square, " +
    '<a href="https://createyourbirthdaymagicsquare.web.app/">Click here</a>';
}
