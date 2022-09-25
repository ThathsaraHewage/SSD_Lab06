import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//signin and signup 
import Signin from "./user/Signin";
import Signup from "./user/Signup";

//role routes
import UserRoutes from "./auth/helper/AdminRoutes";

//management dashboards
import UserOneHome from "./core/UserOneHome";
import UserTwoHome from "./core/UserTwoHome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user-one" exact component={UserOneHome} />
        <Route path="/user-two" exact component={UserTwoHome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
