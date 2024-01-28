import React, { useState } from "react";
import List from "./virtual-list";
import "./styles.module.scss";

const data = [...Array(100).keys()].map(() => ({ height: 100 }));

const VirtualList = () => {
  const [virtualized, setVirtualized] = useState(true);

  const toggleVirtualized = () => {
    setVirtualized(!virtualized);
  };

  return (
    <div>
      <div style={{ backgroundColor: "red", zIndex: 10, position: "relative" }}>
        <button onClick={toggleVirtualized}>Toggle</button>
        <p>
          {virtualized
            ? "With Virtualized List. 10000 list items. Toggling will take a while to load."
            : "Without Virtual List. 10000 list items. Toggling will load instantly."}
        </p>
      </div>
      {virtualized ? (
        <List
          className="container"
          source={data}
          renderItem={({ index, style }) => (
            <div
              className="list"
              key={index}
              style={{ ...style, textAlign: "center" }}
            >
              Hello {index}
            </div>
          )}
        />
      ) : (
        <div className="container">
          <div className="list-wrapper">
            {data.map((e, index) => (
              <div className="list" key={index} style={{ height: 40 }}>
                Hello {index}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualList;
