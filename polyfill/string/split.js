String.prototype.mySplit = function (separator, noOfSplit) {
  const text = this;
  const result = [];

  function startSplit(str, i) {
    if (i > str.length) return;
    const index = str.indexOf(separator);
    if (index >= 0) {
      result.push(str.substring(0, index));
      startSplit(str.substring(index + separator.length));
    } else {
      result.push(str);
    }
  }

  startSplit(text, 0);
  return result.filter((_, i) => i < noOfSplit);
};

const ans = "How are you doing today?".mySplit("y", 2);
console.log(ans);
