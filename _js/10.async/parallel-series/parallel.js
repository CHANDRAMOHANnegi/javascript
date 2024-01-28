// Async parallel function
async function asyncParallel(tasks) {
  const results = await Promise.all(tasks.map((task) => task()));
  return results;
}

// Async parallel function 2
async function asyncParallel2(tasks = [], callback) {
  // store the result
  const results = [];

  const errors = [];

  // track the task executed
  let tasksCompleted = 0;

  tasks.forEach((task) => {
    task
      .then((res) => {
        results.push(res);
      })
      .catch((err) => {
        errors.push(err);
      })
      .finally(() => {
        tasksCompleted++;
        // if all tasks are executed
        // invoke the callback
        if (tasksCompleted >= tasks.length) {
          callback(errors, results);
        }
      });
  });
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

  // console.log("Async parallel:");
  // const parallelResults = await asyncParallel(asyncTasks);
  // console.log(parallelResults);

  // console.log("Async parallel2:");
  // const parallelResults2 = await asyncParallel2(asyncTasks);
  // console.log(parallelResults2);

  asyncParallel(asyncTasks, (error, result) => {
    console.log("errors", error);
    console.log("results", result);
  });
}

example();
