// Set things up
const boxElement = document.querySelector("#red");

let options = {
  threshold: [0.3, 1.0],
};

console.log(boxElement);

let observer = new IntersectionObserver((entries) => {
  console.log(entries);
}, options);

observer.observe(boxElement);
