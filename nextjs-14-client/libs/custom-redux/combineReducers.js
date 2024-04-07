export const combineReducers = (reducers) => {
  const nextState = {};

  return (state = {}, action) => {
    Object.keys(reducers).forEach((reducerKey) => {
      // console.log(reducerKey);
      const reducer = reducers[reducerKey];
      // console.log(reducer);
      // console.log(state,reducerKey);
      nextState[reducerKey] = reducer(state[reducerKey], action);
    });

    return nextState;
  };
};

/**
 *
 * reducer is a function, which takes and object and its updater
 *
 * it takes state and action and returns new state
 *
 * **/
