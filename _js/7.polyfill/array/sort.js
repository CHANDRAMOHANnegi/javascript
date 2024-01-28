const nums = [1, 2, 3];

function mergeSort() {}

function merge(left, right) {
  let result = [];
  let idxLeft = 0;
  let idxRight = 0;

  while (idxLeft < left.length && idxRight < right.length) {
    const [numL, numR] = [left[idxLeft], right[idxRight]];

    if (numL < numR) {
      result.push(numL);
      idxLeft++;
    } else {
      result.push(numR);
      idxRight++;
    }
  }

  return result.concat(left.slice(idxLeft)).concat(right.slice(idxRight));
}
