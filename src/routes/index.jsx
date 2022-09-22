import { Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Route from "./routes";

function Routes() {
  return (
    <Switch>
      <Route exact path="/home" component={Home} isPrivate />
      <Route path="/register" component={Register} />
      <Route path="/" component={Login} />
    </Switch>
  );
}

export default Routes;
