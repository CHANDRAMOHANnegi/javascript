function calculateElementVisibility(element) {
  const rect = element.getBoundingClientRect();

  // Calculate the intersection height between the element and the viewport
  const intersectionHeight =
    Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

  // Calculate the total height of the element
  const elementHeight = Math.min(rect.height, window.innerHeight);

  // Calculate the percentage of the element in the viewport
  const percentageVisible = (intersectionHeight / elementHeight) * 100;

  return percentageVisible;
}

function findIntersectionNodes(observers, broadcast) {
  for (let i = 0; i < observers.length; i++) {
    if (calculateElementVisibility(observers[i]) >= 0.5) {
      observers[i].isIntersected = true;
      broadcast();
    } else {
      observers[i].isIntersected = false;
    }
  }
  return observers;
}

class IO {
  constructor(cb) {
    this.observers = [];
    this.cb = cb;
    window.addEventListener("scroll", () => {
      this.observers = findIntersectionNodes(
        this.observers,
        this.broadcast.bind(this)
      );
    });
  }

  subscribe(el) {
    const idx = this.observers.length;
    this.observers.push(el);
    return () => {
      this.observers.splice(idx, 1);
    };
  }

  broadcast() {
    this.cb(this.observers);
  }
}

const boxElement = document.querySelector("#red");

let observer = new IO((entries) => {
  entries.forEach((entry) => console.log(entry.isIntersected, "test"));
});

const unSubscribe = observer.subscribe(boxElement);
