const url = "https://jsonplaceholder.typicode.com/todos/1";

async function retry(config, retryCount) {
  try {
    const data = await service(config);
    return data; // Return data if successful
  } catch (error) {
    if (retryCount > 0) {
      console.log(`Retrying... ${retryCount} retries left`);
      return retry(config, retryCount - 1);
    } else {
      throw new Error("Error fetching data");
    }
  }
}

const getData = async () => {
  try {
    const data = await service({ url });
    return data;
  } catch (error) {
    return retry({ url }, 3);
  }
};

async function service(config) {
  const { url, ...rest } = config;
  return fetch(url, rest).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  });
}

getData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
