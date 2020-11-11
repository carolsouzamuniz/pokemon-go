import { PokemonInput } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonDatabase extends BaseDatabase{
    private static TABLE_NAME: string = "pokemon_go";

    public async addPokemon (
        row: string,
        name: string,
        pokedex_number: number,
        img_name: number,
        generation: number,
        evolution_stage: number,
        evolved: number,
        familyID: number,
        cross_gen: number,
        type_1: string,
        type_2: string,
        weather_1: string,
        weather_2: string,
        stat_total: number,
        atk: number,
        def: number,
        sta: number,
        legendary: number,
        aquireable: number,
        spawns: number,	
        regional: number,	
        raidable: number,
        hatchable: number,
        shiny: number,
        nest: number,
        pokemon_new: number,
        not_gettable: number,
        future_evolve: number,
        combat_power_100_40: number,
        combat_power_100_39: number
    ) : Promise <void> {
        try {
            await this.getConnection()
            .insert({
                row,
                name,
                pokedex_number,
                img_name,
                generation,
                evolution_stage,
                evolved,
                familyID,
                cross_gen,
                type_1,
                type_2,
                weather_1,
                weather_2,
                stat_total,
                atk,
                def,
                sta,
                legendary,
                aquireable,
                spawns,	
                regional,	
                raidable,
                hatchable,
                shiny,
                nest,
                pokemon_new,
                not_gettable,
                future_evolve,
                combat_power_100_40,
                combat_power_100_39
            })
            .into(PokemonDatabase.TABLE_NAME);   
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    
    public async editByRow (
        row: string,
        name: string,
        pokedex_number: number,
        img_name: number,
        generation: number,
        evolution_stage: number,
        evolved: number,
        familyID: number,
        cross_gen: number,
        type_1: string,
        type_2: string,
        weather_1: string,
        weather_2: string,
        stat_total: number,
        atk: number,
        def: number,
        sta: number,
        legendary: number,
        aquireable: number,
        spawns: number,	
        regional: number,	
        raidable: number,
        hatchable: number,
        shiny: number,
        nest: number,
        pokemon_new: number,
        not_gettable: number,
        future_evolve: number,
        combat_power_100_40: number,
        combat_power_100_39: number
    ): Promise<void> {
        try {
            if(name) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({name})
            }
            if(pokedex_number) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({pokedex_number})
            }
            if(img_name) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({img_name})
            }
            if(generation) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({generation})
            }
            if(evolution_stage) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({evolution_stage})
            }
            if(evolved) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({evolved})
            }
            if(familyID) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({familyID})
            }
            if(cross_gen) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({cross_gen})
            }
            if(type_1) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({type_1})
            }
            if(type_2) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({type_2})
            }
            if(weather_1) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({weather_1})
            }
            if(weather_2) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({weather_2})
            }
            if(stat_total) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({stat_total})
            }
            if(atk) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({atk})
            }
            if(def){
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({def})
            }
            if(sta) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({sta})
            }
            if(legendary) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({legendary})
            }
            if(aquireable) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({aquireable})
            }
            if(spawns) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({spawns})
            }
            if(regional) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({regional})
            }
            if(raidable) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({raidable})
            }
            if(hatchable) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({hatchable})
            }
            if(shiny) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({shiny})
            }
            if(nest) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({nest})
            }
            if(pokemon_new) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({pokemon_new})
            }
            if(not_gettable) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({not_gettable})
            }
            if(future_evolve) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({future_evolve})
            }
            if(combat_power_100_40) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({combat_power_100_40})
            }
            if(combat_power_100_39) {
                await this.getConnection()
                .table(PokemonDatabase.TABLE_NAME)
                .where ({row})
                .update ({combat_power_100_39})
            }

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async deleteByRow(row: string): Promise<void> {
        try {
            await this.getConnection() 
                .table(PokemonDatabase.TABLE_NAME)
                .where({row})
                .delete()
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllPokemon(): Promise<any> {
        try {
            const offset = 20 * ()

            const result = await this.getConnection()
                .select('*')
                .from(PokemonDatabase.TABLE_NAME)
                               
            return result;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getPokemonByRow(row: string): Promise<string> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(PokemonDatabase.TABLE_NAME)
                .where({ row })
                return result[0]

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}