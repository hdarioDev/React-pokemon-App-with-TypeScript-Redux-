export interface IPokemon {
    id: number;
    name: string;
    url: string;
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