import axios from 'axios';
import { API } from '../utils/constants';
import { IPokemon, IPokemonFromApi } from '../types/pokemon'

// export const getPokemons = () :Promise<IPokemonFromApi>  => {
//     return axios.get(API)
//         .then((res) => {
//             return res.data.results
//         })
//         // .catch((err) => console.error(err))
// }


export const fetchPokemons = async (offset: number, limit: number) => {
    // return fetch(API) 
    // .then((res) => res.json())
    const getPokemons = (): Promise<IPokemonFromApi[]> => {
        console.log(`${API}pokemon?limit=${limit}&offset=${offset}`);

        return axios.get(`${API}pokemon?limit=${limit}&offset=${offset}`)
            .then((res) => {
                // console.log("res.data ", res.data);
                return res.data.results
            })
    }



    const mapFromApiPokemons = (apiResponse: IPokemonFromApi[]):
        Array<IPokemon> => {
        return apiResponse.map(pokeFromApi => {
            const { name, url, sprites, id, types } = pokeFromApi;
            return {
                id,
                name,
                url,
                sprites,
                types,
                favorite: false
            }
        })
    }

    const rta = await getPokemons()
        .then((value: IPokemonFromApi[]) => {
            const values = mapFromApiPokemons(value)
            return values
        })
    return rta;

}

export const getPokemonDetails = (pokemon: IPokemon) => {
    return axios.get(pokemon.url)
        .then(response => {
            // console.log("response ", response);

            return response.data;
        })
        .catch(err => console.error(err))
}