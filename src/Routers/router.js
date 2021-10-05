import { Route, Switch } from "react-router-dom";
import { HomePage } from "./../Pages/Home";
import { CartPage } from "./../Pages/Cart";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <HomePage />
      </Route>
      <Route path={"/cart"}>
        <CartPage />
      </Route>
    </Switch>
  );
};
