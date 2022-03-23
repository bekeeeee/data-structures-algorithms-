function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    console.log("last", last);
    console.log("chunked", chunked);
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
