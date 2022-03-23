function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = "";
    const middlePoint = Math.floor((2 * n - 1) / 2);

    for (let column = 0; column < 2 * n - 1; column++) {
      if (column >= middlePoint - row && column <= middlePoint + row)
        level += "#";
      else level += " ";
    }
    console.log(level);
  }
}
pyramid(3);

/*
            #       
        #   #   #
    #   #   #   #   #

*/

function pyramidRecursive(n, row = 0, level = "") {
  if (row === n) return;
  if (level.length === n * 2 - 1) {
    console.log(level);
    return pyramidRecursive(n, row + 1);
  }
  const middlePoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (middlePoint - row <= level.length && middlePoint + row >= level.length)
    add = "#";
  else add = " ";
  pyramidRecursive(n, row, level + add);
}

pyramidRecursive(3);
