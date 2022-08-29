import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { IPokemon } from '../types/pokemon'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { fetchPokemonWithDetails, setNumpage } from '../slices/dataSlices'
import { NUM_PAGE } from '../utils/constants'
import classes from '../styles/components/PokemonList.module.scss'
interface AppState {
  pokemons: Array<IPokemon>
}

const PokemonList = () => {

  const dispatch = useDispatch<any>();
  const pokemons = useSelector((state: any) => state.data.pokemons, shallowEqual);
  const loading: any = useSelector((state: any) => state.ui.loading);
  const numPage: any = useSelector((state: any) => state.data.numPage);

  let isPageLoad = true;
  let init = 0;
  let limit = NUM_PAGE;
  let increment = numPage;

  useEffect(() => {

    pokemonsFetch();

  }, []);

  const pokemonsFetch = async () => {
    if (isPageLoad) {
      observeLastUser()
      isPageLoad = false;
    } else {
      dispatch(fetchPokemonWithDetails(increment));
      increment = increment + NUM_PAGE;
      dispatch(setNumpage(increment));
    }
  }

  const getLastPokemonEle: any = () => document.querySelector('#list__footer')

  const infScrollCallback = (entries: any) => {
    let entrie: any = entries[0];
    if (!entrie.isIntersecting) return;
    pokemonsFetch();

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
            if (item.id > 0)
              return <PokemonCard pokemon={item} key={item.id} favorite={item.favorite} />
          })
        }
        {
          loading ? <Loader /> : null
        }
      </div>
      <footer id="list__footer" style={{ background: "#2b2c3", height: "40px" }} ></footer>
    </>
  )
}

export default PokemonList
