function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    console.log("top row");
    console.log("startColumn=", startColumn, " endColumn= ", endColumn);
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    console.log("startRow=", startRow, " endRow= ", endRow);
    console.log("///////////////////////////////////////////");

    // Right column
    console.log("Right column");
    console.log("startRow=", startRow, " endRow= ", endRow);
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;
    console.log("startColumn=", startColumn, " endColumn= ", endColumn);
    console.log("///////////////////////////////////////////");

    // Bottom row
    console.log("Bottom row");
    console.log("startColumn=", startColumn, " endColumn= ", endColumn);

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;
    console.log("startRow=", startRow, " endRow= ", endRow);
    console.log("///////////////////////////////////////////");

    // start column
    console.log("start column");
    console.log("startRow=", startRow, " endRow= ", endRow);

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
    console.log("startColumn=", startColumn, " endColumn= ", endColumn);
    console.log("///////////////////////////////////////////");
  }
  return results;
}

module.exports = matrix;

console.log(matrix(4));
