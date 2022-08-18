import React from 'react'
import { useParams } from 'react-router-dom';


const PokemonDetail = () => {
    let { id } = useParams();
    console.log("id ", id);

    return (
        <div>PokemonDetail</div>
    )
}

export default PokemonDetail