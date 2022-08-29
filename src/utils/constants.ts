export const API = "https://pokeapi.co/api/v2/";
export const NUM_PAGE = 20;
export function generateRandomCode() {
    var myRandomColor = Math.floor(Math.random() * 8 + 0)
    return POKEMON_TYPE_COLORS[myRandomColor];
};
const POKEMON_TYPE_COLORS = [
    '#C03028',
    '#A040A0',
    '#705898',
    '#7038F8',
    '#705848',
    '#b5304e',
    '#5b0073',
    '#3b3356',
    '#2d5396'
]