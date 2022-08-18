import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import classes from '../styles/components/PokemonList.module.scss'
import { fetchPokemons } from '../services/pokemons'
import { IPokemon } from '../types/pokemon'
import { getPokemonsWithDetails, setLoading } from '../actions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { useIsInViewport } from '../hooks/useIsInViewport'

interface AppState {
  pokemons: Array<IPokemon>
}

const PokemonList = () => {

  const dispatch = useDispatch<any>();
  // const [pokemons, setPokemons] = useState<AppState['pokemons']>([]);

  // const pokemons = useSelector((state: any) => state);
  // console.log("pokemons aaal ", pokemons);

  const pokemons = useSelector((state: any) => state.getIn(['data', 'pokemons']));
  const loading: any = useSelector((state: any) => state.getIn(['ui', 'loading']));

  let isPageLoad = true;
  let init = 0;
  let limit = 10;
  let increment = 0;
  // const [query, setQuery] = useState({ start: 0, limit: 10 });
  // console.log("---> query cread ", query);

  // const ref1 = useRef(null);
  // const isInViewport1 = useIsInViewport(ref1);
  // console.log("isInViewport1 ", isInViewport1);

  useEffect(() => {
    console.log("useEffect");

    pokemonsFetch(init, limit);

  }, []);

  const pokemonsFetch = async (init: any, fin: any) => {
    console.log({ init });
    console.log({ fin });

    // dispatch(setLoading(true));
    dispatch(setLoading(true));

    const response: AppState['pokemons'] = await fetchPokemons(init, fin);

    await dispatch(getPokemonsWithDetails(response));
    dispatch(setLoading(false));
    increment = increment + 10;
    if (isPageLoad) {
      observeLastUser()
      isPageLoad = false;
    }
  }

  const loaderPokemons = () => {

  }


  const getLastPokemonEle: any = () => document.querySelector('#list')

  const infScrollCallback = (entries: any, observer: any) => {
    let entrie: any = entries[0];
    // let start = query.limit;
    // let limit = start + 10;

    init = increment;
    limit = limit;

    // setQuery({ start: start, limit: limit });
    if (!entrie.isIntersecting) return;
    pokemonsFetch(init, limit);

  }

  const infScrollObserver = new IntersectionObserver(infScrollCallback, {});

  const observeLastUser = () => {
    infScrollObserver.observe(getLastPokemonEle())
  }


  return (
    <>
      <div className={classes.ListPokemons} >

        {pokemons.map(
          (item: any) => {
            return <PokemonCard pokemon={item} key={item.id} favorite={item.favorite} />
          })
        }
        {
          loading ?
            <Loader />
            :
            null
        }


      </div>
      <footer id="list"></footer>
    </>

  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export default PokemonList
