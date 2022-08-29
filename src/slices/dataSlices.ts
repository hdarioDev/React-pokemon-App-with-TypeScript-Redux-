import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPokemons, getPokemonDetails } from "../services/pokemons";
import { IPokemon } from "../types/pokemon";
import { NUM_PAGE } from '../utils/constants'

import { setLoading } from "./uiSlices";

const initialState = {
    pokemons: [{
        id: 0,
        name: '',
        url: '',
        sprites: '',
        types: [],
        favorite: false,
    }],
    PokemonDetail: {
        id: 0,
        name: 'default',
        url: '',
        sprites: '',
        types: [],
        favorite: false,
    },
    numPage: 0,
    PokemonsFavorites: [{
        id: 0,
        name: '',
        url: '',
        sprites: '',
        types: [],
        favorite: false,
    }],
}


export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    // Declare the type your function argument here:
    async (data: number, { dispatch }) => {

        dispatch(setLoading(true));
        const responseP = await fetchPokemons(data, NUM_PAGE);
        const pokemonDetail = await Promise.all(
            responseP.map(async (pokemon: IPokemon) => {
                const dataResponseWithDetail = await getPokemonDetails(pokemon.name);
                const newPokemonData: IPokemon = {
                    id: dataResponseWithDetail.id,
                    name: dataResponseWithDetail.name,
                    url: "",
                    sprites: dataResponseWithDetail.sprites,
                    types: dataResponseWithDetail.types,
                    favorite: false,
                    base_experience: dataResponseWithDetail.base_experience
                }
                return newPokemonData
            })
        )
        dispatch(setPokemons(pokemonDetail));
        dispatch(setLoading(false));
    }
);


export const fetchPokemonOneDetail = createAsyncThunk(
    'data/fetchPokemonOneDetail',
    async (data: string, { dispatch }) => {
        dispatch(setLoading(true));
        const responseP = await getPokemonDetails(data);
        dispatch(setPokemonDetail(responseP));
        dispatch(setLoading(false));

    }
);


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state: any, action) => {

            state.pokemons = [...state.pokemons, ...action.payload];
        },
        setNumpage: (state: any, action) => {
            state.numPage = action.payload
        },
        setPokemonDetail: (state: any, action) => {
            state.PokemonDetail = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon: any) => {
                    return pokemon.id === action.payload.pokemonId
                }
            );
            if (currentPokemonIndex >= 0) {
                state.pokemons[currentPokemonIndex].favorite = action.payload.like;
                const currentPokemonI = state.PokemonsFavorites.findIndex(
                    (pokemon: any) => {
                        return pokemon.id === action.payload.pokemonId
                    }
                );
                if (currentPokemonI > 0) {
                    state.PokemonsFavorites.splice(currentPokemonI, 1);
                    if (action.payload.like) {
                        state.PokemonsFavorites.push(state.pokemons[currentPokemonIndex]);
                    }
                } else {
                    state.PokemonsFavorites.push(state.pokemons[currentPokemonIndex]);

                }
            }
        }
    }
});

export const { setFavorite, setPokemons, setPokemonDetail, setNumpage } = dataSlice.actions;

export default dataSlice.reducer;