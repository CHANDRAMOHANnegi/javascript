import React from "react";
import ReactDOM from "react-dom";

import List from "./virtual-list";

import "./styles.module.scss";

const data = [...Array(10000).keys()].map(() => ({ height: 50 }));

class VirtualList extends React.Component {
  constructor() {
    super();

    this.state = {
      virtualized: true,
    };

    this.toggleVirtualized = this.toggleVirtualized.bind(this);
  }

  toggleVirtualized() {
    this.setState({
      virtualized: !this.state.virtualized,
    });
  }

  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: "red", zIndex: 10, position: "relative" }}
        >
          <button onClick={() => this.toggleVirtualized()}>Toggle</button>
          <p>
            {this.state.virtualized
              ? "With Virtualized List. 10000 list items. Toggling will take a while to load."
              : "Without Virtual List. 10000 list items. Toggling will load instantly."}
          </p>
        </div>
        {this.state.virtualized ? (
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
              {data.map((e,index) => (
                <div className="list" key={index} style={{ height: 40 }}>
                  Hello {index}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default VirtualList;
