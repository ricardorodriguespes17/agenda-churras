import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./pages/Details";
import List from "./pages/List";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={List} path="/" exact />
        <Route component={Details} path="/churras/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
