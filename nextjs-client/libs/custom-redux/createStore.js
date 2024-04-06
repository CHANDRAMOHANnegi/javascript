const createStore = (rootReducer) => {
  let state = {};

  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = rootReducer(state, action);
    console.log(state);
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    const idx = listeners.length;
    return () => {
      listener.splice(idx);
    };
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export { createStore };

/**
 *
 * state = {home:{},cart:{}}
 *
 * **/
