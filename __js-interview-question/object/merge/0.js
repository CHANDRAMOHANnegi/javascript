function isObject(item) {
  return (
    item &&
    typeof item === "object" &&
    !Array.isArray(item) &&
    !(item instanceof Date)
  );
}

function deepMerge(target, ...source) {
  if (!source.length) return target;

  sources.forEach((source) => {
    if (isObject(source) && isObject(target)) {
      for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
          if (isObject(source[key])) {
            if (!target[key] || !isObject(target[key])) {
            }
            target[key] = source[key];
            deepMerge(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    }
  });
}
