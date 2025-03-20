function cloneDeep(originalObj) {
  if (!originalObj) {
    return originalObj;
  }
  if (typeof originalObj != "object") {
    return originalObj;
  }
  if (Array.isArray(originalObj)) {
    return originalObj.map(cloneDeep);
  }

  const newObj = {};

  for (const [key, value] of Object.entries(originalObj)) {
    newObj[key] = cloneDeep(value);
  }
  return newObj;
}

const movie = {
  name: "F&F9",
  cast: [
    {
      id: 1,
      name: "Vin Diesel",
    },
  ],
  ratings: {
    count: 4.5,
    reactors: [
      {
        userId: "12309",
        name: "Taran",
      },
      2,
    ],
  },
};

const deepCopyOfMovie = cloneDeep(movie);

console.log(deepCopyOfMovie === movie);

deepCopyOfMovie.ratings.count = 4.3;

console.log(JSON.stringify(movie));

console.log(JSON.stringify(deepCopyOfMovie));
