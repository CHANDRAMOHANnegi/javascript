import React from "react";

const AddSuffix = ({ text, suffix, ...props }) => {
  return (
    <span {...props}>
      {text} {suffix}
    </span>
  );
};

const AppendWord = ({ word, children }) => {
  return React.cloneElement(children, {
    //here we are overriding the original suffix props
    suffix: word,
  });
};

export function Modify() {
  return (
    <>
      <AppendWord word="Caramel">
        <AddSuffix
          text="Chocolate"
          //you can notice that this prop is overridden
          suffix="Drink"
        />
      </AppendWord>
    </>
  );
}

export default Modify;
