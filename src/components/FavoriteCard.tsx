import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import classes from '../styles/components/FavoriteCard.module.scss'
import { generateRandomCode } from '../utils/constants';

const FavoriteCard = () => {

    const PokemonsFavorites = useSelector((state: any) => state.data.PokemonsFavorites, shallowEqual);
    const navigate = useNavigate();

    return (
        <>

            {
                PokemonsFavorites.map(
                    (item: any) => {
                        if (item.id > 0)
                            return <div key={item.id} className={classes.favorite__card} style={{ background: generateRandomCode() }}>

                                <p onClick={() => navigate(-1)}> <span className={classes.span__arrow}> <BiArrowBack size={24} /></span></p>

                                <p className={classes.favorite__card__name}>{item.name}</p>
                                <p className={classes.favorite__card__order}>  #{`${item.id}`.padStart(3, "0")} </p>
                                <div className={classes.favorite__card__types}>
                                    {
                                        item.types.map((item: any) => {
                                            return (
                                                <span key={item.type.name}>{item.type.name}</span>
                                            )
                                        })
                                    }

                                </div>
                                <div className={classes.favorite__card__contentImg}>
                                    <img src={item.sprites.front_default} className={classes.favorite__card__contentImg__image} />
                                </div>
                            </div>
                    })
            }
        </>

    )
}

export default FavoriteCard