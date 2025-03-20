// Async series function
async function asyncSeries(tasks) {
  const results = [];
  for (const task of tasks) {
    const result = await task();
    results.push(result);
  }
  return results;
}

// Example usage
async function example() {
  const asyncTasks = [
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Task 1 complete");
          resolve("Task 1 complete");
        }, 2000);
      });
    },
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Task 2 complete");
          resolve("Task 2 complete");
        }, 1000);
      });
    },
    async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Task 3 complete");
          resolve("Task 3 complete");
        }, 3000);
      });
    },
  ];

  console.log("Async series:");
  const seriesResults = await asyncSeries(asyncTasks);
  console.log(seriesResults);
}

example();
