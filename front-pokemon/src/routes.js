import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { EditPage } from "./components/EditPage";
import { PokemonDetails } from "./components/HomePage/PokemonDetails";

const Routes = () => {
  return (
    <Switch>
      <Route component={HomePage} exact path="/" />
      <Route component={PokemonDetails} exact path="/details" />
      <Route component={EditPage} exact path="/edit" />
    </Switch>
  );
};

export default Routes;