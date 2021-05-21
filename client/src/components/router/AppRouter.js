import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Admin from "../admin/Admin";
import RegContainer from "../forms/registration/RegContainer";
import Basket from "../basket/Basket";
import Device from "../device/Device";
import Shop from "../shop/Shop";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Shop} exact />;
      <Route path="/shop" component={Shop} exact />;
      <Route path="/device" component={Device} exact />;
      <Route path="/login" component={RegContainer} exact />;
      <Route path="/registration" component={RegContainer} exact />;
      <Route path="/basket" component={Basket} exact />;
      <Route path="/admin" component={Admin} exact />;
    </Switch>
  );
};

export default AppRouter;
