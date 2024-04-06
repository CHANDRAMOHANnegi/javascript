Array.prototype.MySplice = function (
  startIndex,
  noOfItemToRemove = 0,
  ...items
) {
  const arr = this;
  const arrLength = arr.length;
  const n = items.length;
  const finalArrayLength = startIndex + Math.max(noOfItemToRemove, n);

  const len = arr.length;

  const [start, mid, last] = [[], [], []];

  for (let i = 0; i < startIndex; i++) {
    start[i] = arr[i];
  }

  for (let i = 0; i < n; i++) {
    mid[i] = items[i];
  }

  for (let i = startIndex + noOfItemToRemove; i < arrLength; i++) {
    last[i - (startIndex + noOfItemToRemove)] = arr[i];
  }

  const finalArray = [...start, ...mid, ...last];
  //   console.log("=====", finalArray);
  // re-write array
  finalArray.forEach((ele, i) => {
    arr[i] = ele;
  });
};

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.MySplice(2, 1, "a", "b", "c");
console.log(arr);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(2, 1, "a", "b", "c");
console.log(arr2);
