// Set things up
const boxElement = document.querySelector("#red");

let options = {
  threshold: 1.0,
};

console.log(boxElement);

let observer = new IntersectionObserver(([entry]) => {
  console.log(entry);
}, options);

observer.observe(boxElement);
