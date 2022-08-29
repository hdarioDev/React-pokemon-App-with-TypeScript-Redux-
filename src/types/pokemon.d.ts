export interface IPokemon {
    id: number;
    name: string;
    url: string;
    sprites: any;
    types: any;
    favorite: boolean;
    base_experience: number;
}

export interface IPokemonDetail {
    id: number;
    name: string;
    sprites: any;
    types: any;
    favorite: boolean;
}

export interface IPokemonFromApi {
    id: number;
    name: string;
    url: string;
    sprites: any;
    types: any
}