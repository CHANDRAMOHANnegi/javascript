import React from "react";
import { combineReducers } from "./combineReducers";
import { createStore } from "./createStore";

const ReduxContext = React.createContext("redux");

const Provider = ({ store, children }) => {
  return (
    <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
  );
};

const connect = (stateProps, dispatchProps) => {
  return (Component) => {
    /**
     *
     * we are making this Connect class so component re-renders
     * here we are subscribing to store and whenever it changes
     * we setState of compoennt and it re-renders
     *
     * **/

    class Connect extends React.Component {
      constructor(props) {
        super(props);
        console.log(this.props);
        this.state = this.props.store?.getState();
      }

      componentDidMount() {
        /**
         * this is done to re-render the component
         * so it gets updated state
         * otherwise component will not re-render
         * **/
        this.props.store.subscribe((state) => {
          this.setState(state);
        });
      }

      render() {
        return (
          <Component
            {...this.props}
            {...stateProps(this.props.store?.getState())}
            {...dispatchProps(this.props.store.dispatch)}
          />
        );
      }
    }

    return (props) => (
      <ReduxContext.Consumer>
        {(store) => <Connect {...props} store={store} />}
      </ReduxContext.Consumer>
    );
  };
};

export { Provider, createStore, combineReducers, connect };
