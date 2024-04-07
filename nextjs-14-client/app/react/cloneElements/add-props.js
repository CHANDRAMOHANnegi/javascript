import React from "react";

const SpanWithText = ({ text, ...props }) => {
  return <span {...props}>{text}</span>;
};

const BoldContainer = ({ children }) => {
  return React.cloneElement(children, {
    style: {
      backgroundColor: "lightblue",
      padding: "10px",
      marginTop: 5,
      color: "red",
    },
  });
};

function AddProps() {
  return (
    <>
      <BoldContainer>
        <SpanWithText text="Shubh Agrawal" />
      </BoldContainer>
    </>
  );
}

export default AddProps;
