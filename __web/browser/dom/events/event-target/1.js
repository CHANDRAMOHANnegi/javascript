// class CustomEventTarget extends EventTarget {}

// const createPubsub = (eventName) => {
//   const customEventTarget = new CustomEventTarget();
//   const subscribe = (eventHandler) => {
//     const scriptContentResizedEventHandler = (event) => {
//       const data = event.detail;
//       eventHandler(data);
//     };
//     customEventTarget.addEventListener(
//       eventName,
//       scriptContentResizedEventHandler
//     );
//     return () => {
//       customEventTarget.removeEventListener(
//         eventName,
//         scriptContentResizedEventHandler
//       );
//     };
//   };

//   const publish = (data) => {
//     customEventTarget.dispatchEvent(
//       new CustomEvent(eventName, { detail: data })
//     );
//   };

//   return { subscribe, publish };
// };

// const customPubsubA = createPubsub("someCustomEvent");

// // Dispatch an event with some custom data
// customPubsubA.publish({ whatever: "you want" });

// // To subscribe to the event:
// const unsubscribe = customPubsubA.subscribe(({ whatever }) => {
//   // do whatever here
// });

// // ...and remember to unsubscribe when it is no longer needed
// unsubscribe();
