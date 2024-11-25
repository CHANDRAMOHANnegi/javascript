// 1. remains in same tab
// 2. cleared when tab is closed
// 3. survives page refresh

// The sessionStorage object is used much less often than localStorage.

// Properties and methods are the same, but it’s much more limited:

//1. The sessionStorage exists only within the current browser tab.
//   a. Another tab with the same page will have a different storage.
//   b. But it is shared between iframes in the same tab (assuming they come from the same origin).

//2. The data survives page refresh, but not closing/opening the tab.
