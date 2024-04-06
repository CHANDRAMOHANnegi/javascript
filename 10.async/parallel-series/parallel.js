// Async parallel function
async function asyncParallel(tasks) {
  const results = await Promise.all(tasks.map((task) => task()));
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

  console.log("Async parallel:");
  const parallelResults = await asyncParallel(asyncTasks);
  console.log(parallelResults);
}

example();
