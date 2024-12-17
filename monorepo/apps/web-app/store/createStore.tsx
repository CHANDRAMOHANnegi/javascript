import { useState, useEffect,  } from "react";

export const createStore = (initialState) => {

  let state = initialState;

  const getState = () => state;

  const listeners = new Set();

  const setState = (fn) => {
    state = fn(state);
    listeners.forEach((l) => l());
  }

  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return { getState, setState, subscribe }
}

export const useStore = (store, selector) => {
  const [state, setState] = useState(() => selector(store.getState()));
  useEffect(() => {
    const callback = () => setState(selector(store.getState()));
    const unsubscribe = store.subscribe(callback);
    callback();
    return unsubscribe;
  }, [store, selector]);
  return state;
}