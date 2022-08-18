
import { fromJS } from 'immutable'
import { SET_POKEMONS, SET_FAVORITE } from '../actions/types'

const initialState = fromJS({
    pokemons: []
})

export const pokemonsReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case SET_POKEMONS:
            console.log("SETEO POKEMON ", action.payload);
            let pokemonInMemo: any = [];
            if (state.pokemons) {
                console.log("state.pokemons ", state.pokemons);
                pokemonInMemo = state.pokemons;
            } else {
                console.log("NO HAY ANTOGUOS ");

            }


            return { ...state, pokemons: [...pokemonInMemo, ...action.payload] } //tradicional
        // return state.setIn(['pokemons'], fromJS(action.payload)); //immutable

        case SET_FAVORITE:
            //IMMUTABLE

            const currentPokemonIndex = state.get('pokemons').findIndex(
                (pokemon: any) => {
                    return pokemon.get('id') === action.payload.pokemonId
                })

            if (currentPokemonIndex < 0) {
                return state
            }
            const isFavorite = state.getIn(
                ['pokemons', currentPokemonIndex, 'favorite']
            );

            return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);

        /** SIN IMMUTABLE */
        // const newPokemons: any = [...state.pokemons]
        // const currentPokemonIndex = newPokemons.findIndex(
        //     (pokemon: any) => {
        //         return pokemon.id === action.payload.pokemonId
        //     });
        // console.log({ currentPokemonIndex });

        // if (currentPokemonIndex < 0) {
        //     return state
        // }
        // newPokemons[currentPokemonIndex].favorite = !newPokemons[currentPokemonIndex].favorite
        // return { ...state, pokemons: newPokemons }
        default:
            return state
    }
}
