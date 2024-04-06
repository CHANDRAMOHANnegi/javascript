import React from "react";
import { connect } from "@/libs/custom-redux/index";
import { decrementAction, incrementAction } from "./counterStore";

export const Counter = ({ count, incr, decr }) => {
  console.log("count", count);

  React.useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("return useEffect");
    };
  }, [count]);

  return (
    <div>
      <p>
        <b>{count}</b>
      </p>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    count: state?.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incr: () => dispatch(incrementAction()),
  decr: () => dispatch(decrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
