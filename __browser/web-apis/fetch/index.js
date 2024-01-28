const retry = (req) => {
  console.log(req);
};

const fetchData = () => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  const myRequest = new Request(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      // signal,
    }
  );

  console.log(myRequest);

  fetch(myRequest)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.log(err);

      retry(myRequest);
    });
};

function init() {
  fetchData();

  // const d = document.getElementById("")
}

init();
