import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import classes from '../styles/components/PokemonCard.module.scss'
import { IPokemon } from '../types/pokemon'
import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../slices/dataSlices'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface Props {
    pokemon: IPokemon,
    favorite: boolean
}

const PokemonCard = ({ pokemon }: Props) => {
    const dispatch = useDispatch<any>();
    const typeString = pokemon.types.map(((item: any) => item.type.name)).join(', ');

    const key = `like-pokemon-${pokemon.id}`
    const [liked, setLocalStorage] = useLocalStorage(key, false);
    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    useEffect(() => {
        if (liked) {
            dispatch(setFavorite({ pokemonId: pokemon.id, like: liked }));
        }
    }, [])

    const onHandleFavorite = () => {
        console.log(pokemon.id);
        setLocalStorage(!liked)
        console.log({ liked });
        const likedI = !liked;
        dispatch(setFavorite({ pokemonId: pokemon.id, like: likedI }))
    }

    return (
        <div className={classes.card} id="items">
            <div className={classes.card__top}>
                <p className={classes.card__title}>{pokemon.name}</p>
                <div className={classes.rating}>
                    <img className={classes.img} src={pokemon.sprites.front_default} />
                </div>
            </div>
            <div className={classes.card__info}>
                <p className={classes.episode__num}>{pokemon.base_experience}p</p>
                <p className={classes.episode__type}>{typeString}</p>
            </div>
            <div className={classes.card__btns}>
                {
                    <Icon className={classes.add__btn} onClick={onHandleFavorite} />
                }
                <Link to={`pokemon/${pokemon.name}`} className={classes.watch__btn} >
                    <button className={classes.watch__btn__txt}>
                        Ver
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PokemonCard