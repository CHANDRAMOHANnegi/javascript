// normal

// var searchBarDom = document.getElementById('search-bar');
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// function getSearchResult() {
//   numberOfApiCalls += 1;
//   console.log('Number of API Calls : ' + numberOfApiCalls);
// }

// searchBarDom.addEventListener('input', function (e) {
//   numberOfKeyPresses += 1;
//   console.log('Search Keyword : ' + e.target.value);
//   console.log('Number of Key Presses : ' + numberOfKeyPresses );
//   getSearchResult();
// });

// normal ends

/***
 *
 *
 *
 *
 *
 * ***/

// debounce

// var searchBarDom = document.getElementById("search-bar");
// var numberOfKeyPresses = 0;
// var numberOfApiCalls = 0;

// const getSearchResult = debounce(() => {
//   numberOfApiCalls += 1;
//   console.log("Number of API Calls : " + numberOfApiCalls);
// }, 1000);

// searchBarDom.addEventListener("input", function (e) {
//   numberOfKeyPresses += 1;
//   console.log("Search Keyword : " + e.target.value);
//   console.log("Number of Key Presses : " + numberOfKeyPresses);
//   getSearchResult();
// });

// function debounce(callback, delay = 1000) {
//   var time;
//   return (...args) => {
//     clearTimeout(time);
//     time = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }

// debounce

/*****
 *
 *
 *
 *
 * *****/

var searchBarDom = document.getElementById("search-bar");
var numberOfKeyPresses = 0;
var numberOfApiCalls = 0;

const getSearchResult = throttle(() => {
  numberOfApiCalls += 1;
  console.log("Number of API Calls : " + numberOfApiCalls);
}, 1000);

searchBarDom.addEventListener("input", function (e) {
  numberOfKeyPresses += 1;
  console.log("Search Keyword : " + e.target.value);
  console.log("Number of Key Presses : " + numberOfKeyPresses);
  getSearchResult();
});

function throttle(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
