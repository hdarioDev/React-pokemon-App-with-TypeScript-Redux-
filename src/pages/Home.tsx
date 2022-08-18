import React from 'react'
import PokemonList from '../components/PokemonList'
import Searcher from '../components/Searcher'

const Home = () => {
    return (
        <>
            <Searcher />
            <PokemonList />
        </>
    )
}

export default Home