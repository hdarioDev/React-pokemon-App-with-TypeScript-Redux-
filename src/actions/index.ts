import { getPokemonDetails } from "../services/pokemons";
import { IPokemon } from "../types/pokemon";
import { SET_LOADING, SET_POKEMONS, SET_FAVORITE } from "./types";

export const setPokemons = (payload: any) => ({
    type: SET_POKEMONS,
    payload
})

export const getPokemonsWithDetails = (pokemons: IPokemon[]) => async (dispatch: any) => {
    const pokemonDetail = await Promise.all(
        pokemons.map<any>(async (pokemon: IPokemon) => {
            const dataResponseWithDetail = await getPokemonDetails(pokemon);

            const newPokemonData: IPokemon = {
                id: dataResponseWithDetail.id,
                name: dataResponseWithDetail.name,
                url: "",
                sprites: dataResponseWithDetail.sprites,
                types: dataResponseWithDetail.types,
                favorite: false,
            }
            return newPokemonData
        })
    )

    console.log("NUEVO SETEO ", pokemonDetail);
    dispatch(setPokemons(pokemonDetail));
}

export const setLoading = (payload: any) => ({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload: any) => ({
    type: SET_FAVORITE,
    payload
})