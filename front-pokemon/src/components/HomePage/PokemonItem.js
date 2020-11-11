import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../../Images/pokemon.jpg";
import { PokemonDetails } from "./PokemonDetails";
import {
  CardContainer
} from './styles'

export const PokemonItem = (props) => {
  const pokemon = props.pokemon;

  const [details, setDetails] = useState(undefined);
  const [showDetails, setShowDetails] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/pokemon/${pokemon.row}`)
      .then((response) => {
        setDetails(response.data);
      });
  }, []);

  const openDialog = () => {
    setShowDetails(true);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <CardContainer>
      <img src={Pokemon} alt={"Imagem do pokemon"} onClick={openDialog} />
      <p>Row: {pokemon.row}</p>
      <p>Nome: {pokemon.name}</p>
      {showDetails && (
        <PokemonDetails
          details={details}
          open={open}
          closeDialog={closeDialog}
        />
      )}
    </CardContainer>
  );
};
