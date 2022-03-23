function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) stair += "#";
      else stair += " ";
    }
    console.log(stair);
  }
}
// steps(3);

/*
    1- from 0 to n (iterate through rows)
        create an empty string 'stair'
        from 0 to n (iterate through columns)
            if the current column is equal to
            or less than the current row
                add '#' to 'stair'
            else 
                add a space to 'stair'
        console log 'stair'
*/

function stepsRecursive(n, row = 0, stair = "") {
  if (n === row) return;
  if (n === stair.length) {
    console.log("stair", stair);
    return steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}
stepsRecursive(3);
