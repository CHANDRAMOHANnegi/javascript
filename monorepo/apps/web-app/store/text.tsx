import React,{useCallback} from "react";
import { useStore } from "./createStore";
import { store } from "./store";

export const TextBox = () => {
  const text = useStore(store, useCallback((state) => state.text, []));
  const setText = (event) => {
    store.setState((prev) => ({ ...prev, text: event.target.value }))
  }
  return (
    <div>
      <input value={text} onChange={setText} className='full-width' />
    </div>
  );
}
