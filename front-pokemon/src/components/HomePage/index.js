import React from "react";
import { HomeContainer } from "./styles";
import { Filters } from "./Filters";
import { PokemonCards } from "./PokemonCards";


export const HomePage = () => {
  return (
    <HomeContainer>
      <Filters />
      <PokemonCards />
    </HomeContainer>
  );
};
