import React from "react";

const Button = () => {
  return (
    <button type="button" style={{ padding: "10px" }}>
      This is a styled button
    </button>
  );
};

function Extends() {
  return (
    <section>
      {React.cloneElement(
        Button(), // component to overwrite
        {
          onClick: () => {
            // additional props
            alert("You are making progress!!!");
          },
        },
        <>Styled button with onClick</>
      )}
    </section>
  );
}

export default Extends;
