class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

const observable = new Observable();

function handleClick() {
  observable.notify("User clicked button!");
}

function handleToggle() {
  observable.notify("User toggled switch!");
}

/***
 *
 * listeners
 *
 * **/

function logger(data) {
  console.log(`${new Date()} ${data}`);
}

function toastify(data) {
  console.log("Hello alert click", data);
}

observable.subscribe(logger);
observable.subscribe(toastify);

// export default function App() {
//   return (
//     <div className="App">
//       <Button variant="contained" onClick={handleClick}>
//         Click me!
//       </Button>
//       <FormControlLabel
//         control={<Switch name="" onChange={handleToggle} />}
//         label="Toggle me!"
//       />
//       <ToastContainer />
//     </div>
//   );
// }
