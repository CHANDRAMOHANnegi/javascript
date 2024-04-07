"use client";
import React from "react";
import CustomRedux from "./custom-redux";
import { Provider, combineReducers, createStore } from "@/libs/custom-redux";
import counterReducer from "./custom-redux/counterStore";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <CustomRedux />
      </Provider>
    </div>
  );
}
