// MockSearchAPI.js

const generateLargeDataSet = (size) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = [];

  for (let i = 0; i < size; i++) {
    const length = Math.floor(Math.random() * 10) + 1;
    let word = "";

    for (let j = 0; j < length; j++) {
      const randomChar = alphabet.charAt(
        Math.floor(Math.random() * alphabet.length)
      );
      word += randomChar;
    }

    words.push(word);
  }

  return words;
};

const largeDataSet = generateLargeDataSet(1000); // Generating 10,000 random words for the dataset

const search = (query) => {
  return new Promise((resolve, reject) => {
    // Simulate random network delay between 300ms to 1000ms
    const networkDelay = Math.random() * (1000 - 300) + 300;

    setTimeout(() => {
      // Simulate occasional errors
      if (Math.random() < 0.1) {
        reject(
          new Error("Failed to fetch search results. Please try again later.")
        );
      } else {
        // Filter results based on the query
        const filteredResults = largeDataSet.filter((result) =>
          result.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredResults);
      }
    }, networkDelay);
  });
};

const searchWithRetry = (query) => {
  return search(query);
};

const mockSearchAPI = (query) => {
  const maxRetries = 3; // Maximum number of retry attempts

  return searchWithRetry(query, maxRetries);
};

export default mockSearchAPI;
