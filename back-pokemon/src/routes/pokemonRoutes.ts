import express from 'express';
import { PokemonController } from '../controller/PokemonController';

export const pokemonRouter = express.Router();

const pokemonController = new PokemonController();

pokemonRouter.put('/add', pokemonController.addPokemon);
pokemonRouter.post('/edit/:row', pokemonController.editByRow);
pokemonRouter.delete('/delete/:row', pokemonController.deleteByRow);
pokemonRouter.get('/profile', pokemonController.getAllPokemon);
pokemonRouter.get('/:row', pokemonController.getPokemonByRow);


