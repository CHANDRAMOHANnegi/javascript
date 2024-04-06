const createStore = (rootReducer) => {
  /**
   *
   * give state some initial value , otherwise dispatch to set initial value,
   * and use proper check in combine reducer
   *
   * */
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

  // dispatch({});

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
