import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  function getToken() {
    const token = localStorage.getItem("myClientToken");

    if (token) {
      return true;
    }
    return false;
  }

  return (
    <ReactDOMRoute
      render={() => {
        return isPrivate === getToken() ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/home"} />
        );
      }}
      {...rest}
    />
  );
};

export default Route;
