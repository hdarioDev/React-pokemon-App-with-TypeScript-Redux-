import React from 'react'
import FavoriteCard from '../components/FavoriteCard'
import { shallowEqual, useSelector } from 'react-redux'
import classes from '../styles/components/Favorites.module.scss'
import NotFound from '../components/NotFound'

const Favorites = () => {

    const PokemonsFavorites = useSelector((state: any) => state.data.PokemonsFavorites, shallowEqual);

    return (
        <div className={classes.container__favorites}>
            {PokemonsFavorites.length > 1 ?
                <FavoriteCard />
                :

                <NotFound />
            }

        </div>

    )
}

export default Favorites