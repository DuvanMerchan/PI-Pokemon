import React from "react";
import { colorPoke, typeColor, textColorPoke } from "../Styled/TypeColor";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards(pokemons) {
  pokemons = pokemons.pokemons;
  try {
    return (
      <div className="conteiner">
      {pokemons?.map((pokemon) => (
        <figure key={pokemon.name} className="cards-Conteiner" >
          <div className="img-Conteiner" key={pokemon.id} >
            <img className="img-Pokemon" src={pokemon.img} alt="pokeImg"></img>
          </div>
          <figcaption className="data-Conteiner" key={pokemon.name}>
            <h2>#{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <div className="typeContainer" >
              {pokemon.type?
              pokemon.type?.map((t,index)=>
              {return (
                  <button 
                  className="typeButton"
                  style={{
                    backgroundColor: typeColor(colorPoke,t),
                    color: typeColor(textColorPoke, t),
                    border: typeColor(textColorPoke, t),}} 
                  key={index}>{t.toUpperCase()}</button>
                )
              }
              ) : null }
               </div>
             <Link to={`/detail/${pokemon.id}`}>
                <p className="detalleButton">Detalle</p>
            </Link>
          </figcaption>
        </figure>
      ))}
    </div>
  );
  
} catch (error) {
    console.log(error)
}
}
export default Cards;
