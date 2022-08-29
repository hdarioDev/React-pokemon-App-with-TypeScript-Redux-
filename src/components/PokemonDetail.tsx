import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Loader from './Loader';
import { BiArrowBack } from 'react-icons/bi';
import { fetchPokemonOneDetail } from '../slices/dataSlices';
import classes from '../styles/components/PokemonDetail.module.scss'
interface AppState {
    name: string,
    number: number
}

const PokemonDetail = () => {

    const dispatch = useDispatch<any>();
    const pokemonDetail = useSelector((state: any) => state.data.PokemonDetail, shallowEqual);
    const loading: any = useSelector((state: any) => state.ui.loading);

    let { name } = useParams();
    let auxName: string = name = "" + name;

    useEffect(() => {
        dispatch(fetchPokemonOneDetail(auxName))
    }, []);

    const barStyles = (num: number) => {
        const color = num > 49 ? "rgb(25 131 39)" : "#ff3e3e"
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }

    return (
        <>

            <div className={classes.content} >
                <Link to='/'> <span className={classes.span__arrow}> <BiArrowBack size={24} /></span></Link>
                <div className={classes.container} >
                    <p className={classes.container__name}>{pokemonDetail.name}</p>
                    <p className={classes.container__order}> #{`${pokemonDetail.id}`.padStart(3, "0")} </p>
                    <div className={classes.container__types}>
                        {
                            pokemonDetail.types.map((item: any) => {
                                return (
                                    <span key={item.type.name}>{item.type.name}</span>
                                )
                            })
                        }
                    </div>
                    <div className={classes.container__contentImg}>
                        <img src={pokemonDetail.sprites.front_default} className={classes.container__contentImg__image} />
                    </div>
                </div>
            </div>

            <div className={classes.container__stats}>
                <h3>Stats</h3>
                {
                    pokemonDetail?.stats?.map((item: any, index: number) => {
                        return (
                            <div className={classes.block} key={index}>
                                <div className={classes.blockTitle}>
                                    <p className={classes.statName} >{item.stat.name}</p>
                                </div>
                                <div className={classes.blockInfo}>
                                    <p className={classes.number}>{item.base_stat}</p>

                                    <div className={classes.bgBar}>
                                        <div className={classes.bar} style={barStyles(item.base_stat)} ></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {
                loading ?
                    <Loader />
                    :
                    null
            }
        </>

    )
}

export default PokemonDetail