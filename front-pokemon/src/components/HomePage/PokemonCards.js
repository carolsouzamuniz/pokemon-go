import React, { useEffect, useState } from "react";
import { PokemonItem } from "./PokemonItem";
import axios from "axios";
import {
  PokemonCardContainer
} from './styles'

export const PokemonCards = () => {
  const [pokemons, setPokemons] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:3000/pokemon/profile").then((response) => {
      setPokemons(response.data);
    });
  }, []);

  
  return (
    <PokemonCardContainer>
      {pokemons.map((profile) => {
        return <PokemonItem pokemon={profile} />;
      })}
    </PokemonCardContainer>
  );
};
