import { Response, Request } from "express";
import { PokemonDatabase } from "../data/PokemonDatabase";
import { PokemonInput } from "../model/Pokemon";

export class PokemonController {
    public async addPokemon(req: Request, res: Response) {
        try {
            if (req.body.row === "" ) 
                { throw new Error("Preencha o campo 'Row'") }

            if (req.body.name === "" ) 
                { throw new Error("Preencha o campo 'Name'") }

            if (req.body.pokedex_number === "" )
                 { throw new Error("Preencha o campo 'Pokedex Number'") }

            if (req.body.img_name === "" ) 
                { throw new Error("Preencha o campo 'Img Name'") }

            if (req.body.generation === "" )
                { throw new Error("Preencha o campo 'Generation'") }

            if (req.body.familyID === "" ) 
                { throw new Error("Preencha o campo 'FamilyID'") }

            if (req.body.type_1 === "" )    
                { throw new Error("Preencha o campo 'Type_1'") }

            if (req.body.weather_1 === "" ) 
                { throw new Error("Preencha o campo 'Weather_1'") }

            if (req.body.stat_total === "" ) 
                { throw new Error("Preencha o campo 'Stat Total'") }

            if (req.body.atk === "" ) 
                { throw new Error("Preencha o campo 'Atk'") }

            if (req.body.def === "" ) 
                { throw new Error("Preencha o campo 'Def'") }

            if (req.body.sta === "" ) 
                { throw new Error("Preencha o campo 'Sta'") }

            if (req.body.combat_power_100_40 === "" ) 
                { throw new Error("Preencha o campo 'Combat Power 100% 40'") }

            if (req.body.combat_power_100_39 === "" ) 
                { throw new Error("Preencha o campo 'Combat Power 100% 39'") }
            
            const pokemonInput: PokemonInput = {
                row: req.body.row,
                name: req.body.name,
                pokedex_number: req.body.pokedex_number,
                img_name: req.body.img_name,
                generation: req.body.generation,
                evolution_stage: req.body.evolution_stage,
                evolved: req.body.evolved,
                familyID: req.body.familyID,
                cross_gen: req.body.cross_gen,
                type_1: req.body.type_1,
                type_2: req.body.type_2,
                weather_1: req.body.weather_1,
                weather_2: req.body.weather_2,
                stat_total: req.body.stat_total,
                atk: req.body.atk,
                def: req.body.def,
                sta: req.body.sta,
                legendary: req.body.legendary,
                aquireable: req.body.aquireable,
                spawns: req.body.spawns,	
                regional: req.body.regional,	
                raidable: req.body.raidable,
                hatchable: req.body.hatchable,
                shiny: req.body.shiny,
                nest: req.body.nest,
                pokemon_new: req.body.pokemon_new,
                not_gettable: req.body.not_gettable,
                future_evolve: req.body.future_evolve,
                combat_power_100_40: req.body.combat_power_100_40,
                combat_power_100_39: req.body.combat_power_100_39
            }
            
            const pokemonDatabase = new PokemonDatabase();
            
            await pokemonDatabase.addPokemon(
                pokemonInput.row,
                pokemonInput.name,
                pokemonInput.pokedex_number,
                pokemonInput.img_name,
                pokemonInput.generation,
                pokemonInput.evolution_stage,
                pokemonInput.evolved,
                pokemonInput.familyID,
                pokemonInput.cross_gen,
                pokemonInput.type_1,
                pokemonInput.type_2,
                pokemonInput. weather_1,
                pokemonInput.weather_2,
                pokemonInput.stat_total,
                pokemonInput.atk,
                pokemonInput.def,
                pokemonInput.sta,
                pokemonInput.legendary,
                pokemonInput.aquireable,
                pokemonInput.spawns,	
                pokemonInput.regional,	
                pokemonInput.raidable,
                pokemonInput.hatchable,
                pokemonInput.shiny,
                pokemonInput.nest,
                pokemonInput.pokemon_new,
                pokemonInput.not_gettable,
                pokemonInput.future_evolve,
                pokemonInput.combat_power_100_40,
                pokemonInput.combat_power_100_39
            );

            res.status(200).send({ 
                message: "Pokemon inserido com sucesso!"
             })

        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
    public async editByRow(req: Request, res: Response) {
        try {
            const updatedPokemon = {
                row: req.params.row,
                name: req.body.name,
                pokedex_number: req.body.pokedex_number,
                img_name: req.body.img_name,
                generation: req.body.generation,
                evolution_stage: req.body.evolution_stage,
                evolved: req.body.evolved,
                familyID: req.body.familyID,
                cross_gen: req.body.cross_gen,
                type_1: req.body.type_1,
                type_2: req.body.type_2,
                weather_1: req.body.weather_1,
                weather_2: req.body.weather_2,
                stat_total: req.body.stat_total,
                atk: req.body.atk,
                def: req.body.def,
                sta: req.body.sta,
                legendary: req.body.legendary,
                aquireable: req.body.aquireable,
                spawns: req.body.spawns,	
                regional: req.body.regional,	
                raidable: req.body.raidable,
                hatchable: req.body.hatchable,
                shiny: req.body.shiny,
                nest: req.body.nest,
                pokemon_new: req.body.pokemon_new,
                not_gettable: req.body.not_gettable,
                future_evolve: req.body.future_evolve,
                combat_power_100_40: req.body.combat_power_100_40,
                combat_power_100_39: req.body.combat_power_100_39
            }
            
            const pokemonDatabase = new PokemonDatabase();
            
            await pokemonDatabase.editByRow(
                updatedPokemon.row,
                updatedPokemon.name,
                updatedPokemon.pokedex_number,
                updatedPokemon.img_name,
                updatedPokemon.generation,
                updatedPokemon.evolution_stage,
                updatedPokemon.evolved,
                updatedPokemon.familyID,
                updatedPokemon.cross_gen,
                updatedPokemon.type_1,
                updatedPokemon.type_2,
                updatedPokemon.weather_1,
                updatedPokemon.weather_2,
                updatedPokemon.stat_total,
                updatedPokemon.atk,
                updatedPokemon.def,
                updatedPokemon.sta,
                updatedPokemon.legendary,
                updatedPokemon.aquireable,
                updatedPokemon.spawns,	
                updatedPokemon.regional,	
                updatedPokemon.raidable,
                updatedPokemon.hatchable,
                updatedPokemon.shiny,
                updatedPokemon.nest,
                updatedPokemon.pokemon_new,
                updatedPokemon.not_gettable,
                updatedPokemon.future_evolve,
                updatedPokemon.combat_power_100_40,
                updatedPokemon.combat_power_100_39
            
            // if (!req.body.name || req.body.name === "") 
            //     { throw new Error("Preencha o campo 'Name'") }
                
            // if (!req.body.pokedex_number || req.body.pokedex_number === "")
            //     { throw new Error("Preencha o campo 'Pokedex Number'") }

            // if (!req.body.img_name || req.body.img_name === "") 
            //     { throw new Error("Preencha o campo 'Img Name'") }

            // if (!req.body.generation || req.body.generation === "")
            //     { throw new Error("Preencha o campo 'Generation'") }

            // if (!req.body.familyID || req.body.familyID === "") 
            //     { throw new Error("Preencha o campo 'FamilyID'") }

            // if (!req.body.type_1 || req.body.type_1 === "")    
            //     { throw new Error("Preencha o campo 'Type_1'") }

            // if (!req.body.weather_1 || req.body.weather_1 === "") 
            //     { throw new Error("Preencha o campo 'Weather_1'") }

            // if (!req.body.stat_total || req.body.stat_total === "") 
            //     { throw new Error("Preencha o campo 'Stat Total'") }

            // if (!req.body.atk || req.body.atk === "") 
            //     { throw new Error("Preencha o campo 'Atk'") }

            // if (!req.body.def || req.body.def === "") 
            //     { throw new Error("Preencha o campo 'Def'") }

            // if (!req.body.sta || req.body.sta === "") 
            //     { throw new Error("Preencha o campo 'Sta'") }

            // if (!req.body.combat_power_100_40 || req.body.combat_power_100_40 === "") 
            //     { throw new Error("Preencha o campo 'Combat Power 100% 40'") }

            // if (!req.body.combat_power_100_39 || req.body.combat_power_100_39 === "") 
            //     { throw new Error("Preencha o campo 'Combat Power 100% 39'") }
            
            ) 
            res.status(200).send({ 
                message: "Pokemon alterado com sucesso!"
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }   
    }

    public async deleteByRow(req: Request, res: Response) {
      try {
        const deleteByRow = {
            row: req.params.row
        }

        const pokemonDatabase = new PokemonDatabase()

        await pokemonDatabase.deleteByRow (
            deleteByRow.row
        )
        res.status(200).send({ 
            message: "Pokemon deletado com sucesso!"
        })
          
      } catch (error) {
        res.status(400).send({
            message: error.message
        })
      }
    }

    public async getAllPokemon(req: Request, res: Response) {    
        try {
            const pokemonDatabase = new PokemonDatabase()
            const result = await pokemonDatabase.getAllPokemon()

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }

    public async getPokemonByRow(req: Request, res: Response) {    
        try {
            const getByRow = req.params.row
            
            const pokemonDatabase = new PokemonDatabase()
            const result = await pokemonDatabase.getPokemonByRow(getByRow)
            
            res.status(200).send(result)
              
          }  catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}
