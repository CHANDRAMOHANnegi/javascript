/***
 * 
 * !add separate check for null if required
 * 
 * */ 

function isObject(item) {
    return (
      item &&
      typeof item === "object" &&
      !Array.isArray(item) &&
      !(item instanceof Date)
    );
  }
  