import React from 'react'
import {
    Link
} from "react-router-dom";
import classes from '../styles/components/PokemonCard.module.scss'
import { IPokemon } from '../types/pokemon'
import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../actions'
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
    pokemon: IPokemon,
    favorite: boolean
}


const PokemonCard = ({ pokemon, favorite }: Props) => {

    const typeString = pokemon.types.map(((item: any) => item.type.name)).join(', ');

    const key = `like-pokemon-${pokemon.id}`
    const [liked, setLiked] = useLocalStorage(key, false);

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    const dispatch = useDispatch<any>();

    const onHandleFavorite = () => {
        console.log(pokemon.id);
        setLiked(!liked)
        dispatch(setFavorite({ pokemonId: pokemon.id }))

    }

    return (
        // <Link
        //     to={{ pathname: `/pokemon/${pokemon.id}` }}>
        //     <div className={classes.card}>
        //         <div className={classes.blob}><MdFavoriteBorder className={classes.icon__favorite} size="25" /></div>

        //         {/* <span className={classes.img} style={{ background: `url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")`, backgroundRepeat: 'no-repeat', objectFit: 'cover', alignItems: 'center' }}></span> */}

        //         <img className={classes.img} src={pokemon.sprites.front_default} />

        //         <h2>{pokemon.name}<br /><span>Doe</span></h2>
        //         <p>
        //             <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className={classes.icon}  >
        //                 <path d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z" fill="#f0f0f0"></path>
        //             </svg>
        //             <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className={classes.icon}  >
        //                 <path d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z" fill="#f0f0f0"></path>
        //             </svg>
        //             <svg height="35" width="35" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className={classes.icon}  >
        //                 <path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" fill="#f0f0f0"></path>
        //             </svg>
        //         </p>
        //     </div>
        // </Link>
        <div className={classes.card} id="items">
            <div className={classes.card__top}>
                <p className={classes.card__title}>{pokemon.name}</p>
                <div className={classes.rating}>
                    <img className={classes.img} src={pokemon.sprites.front_default} />
                    {/* <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg> */}
                </div>
            </div>
            <div className={classes.card__info}>
                <p className={classes.episode__num}>46Ep</p>
                <p className={classes.episode__type}>{typeString}</p>
            </div>
            <div className={classes.card__btns}>
                {
                    <Icon className={classes.add__btn} onClick={onHandleFavorite} />
                    // !pokemon.favorite ? <MdFavoriteBorder className={classes.add__btn} onClick={onHandleFavorite} /> : <MdFavorite className={classes.add__btn} onClick={onHandleFavorite} />

                }
                {/* <button className={classes.add__btn} >+</button> */}

                <button className={classes.watch__btn}>
                    <Link to="/pokemon" className={classes.watch__btn__txt} >Ver</Link>
                </button>
            </div>
        </div>
        // <div className={classes.PokemonCard__Container}>
        //     <h2>Pokemon</h2>
        //     <img src={`${IMAGE_DEFAULT}`} alt="imagen" />
        // </div>
    )
}

export default PokemonCard