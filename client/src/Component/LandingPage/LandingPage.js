import React, { useEffect } from "react";
import './LandingPage.css';
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../actions/Actions";

function LandingPage() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getAll());
    // eslint-disable-next-line
  }, []);

  function showPokemon() {
    try {
    let pokeId = Math.floor(Math.random() * pokemons.length);
    // eslint-disable-next-line
    return pokemons?.map((p) => {
      if (pokeId === p.id) 
      return <img src={p.img} alt="" key={p.id}></img>;
      // eslint-disable-next-line
    });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="box_LP">
      <div className="titulo">
        {showPokemon()}
        <h1>Bienvemidos a PokemonApp</h1>
        {showPokemon()}
      </div>
      <div className="contenido">
      <h3>
        En esta App podras encontrar la información de de tus pokemons favoritos
      </h3>
      <h3>he incluso crear tus propios pokemons</h3>
      </div>
      <div className="low">
        <>
      {showPokemon()}
        </>
        <>
      {showPokemon()}
        </>
        <>
      {showPokemon()}
        </>
      </div>
      <footer>Realizado por Duván Merchán para Henry</footer>
    </div>
  );
}

export default LandingPage;
