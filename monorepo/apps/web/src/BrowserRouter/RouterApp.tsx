import { RouteProvider } from "./RouteProvider";
import Route from "./Route";
import Home from "../components/home";
import Store from "../components/store";
import { NavWrapper } from "../components/nav-wrapper";

const RouterApp = () => {
  return (
    <RouteProvider>
      <NavWrapper />
      <Route path="/">
        <Home />
      </Route>

      <Route path="/store">
        <Store />
      </Route>
    </RouteProvider>
  );
};

export default RouterApp;
