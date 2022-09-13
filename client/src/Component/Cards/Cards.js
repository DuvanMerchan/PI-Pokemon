import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function Cards(pokemons) {
  pokemons = pokemons.pokemons;
  // {pokemon.type[1]?(
  //   <div className="typeContainer">
  //     <h3 className="type-Conteiner-types">{pokemon.type[0]}</h3>
  //     <h3 className="type-Conteiner-types">{pokemon.type[1]}</h3>
  //   </div>
  //   ):(
  //     <div>
  //       <h3 className="type-Conteiner-types">{pokemon.type[0]}</h3>
  //     </div>
  //   )}
 // console.log(pokemons.type)
  try {
    return (
      <div className="conteiner">
      {pokemons?.map((pokemon) => (
        <figure key={pokemon.name} className="cards-Conteiner" >
          <div className="img-Conteiner" >
            <img className="img-Pokemon" src={pokemon.img} alt="pokeImg"></img>
          </div>
          <figcaption className="data-Conteiner" >
            <h2>#{pokemon.id}</h2>
            <h1>{pokemon.name}</h1>
            <div className="typeContainer" key={pokemon.name}>
            {pokemon.type? pokemon?.type.map((t) => <div><h3 key={t}>{t}</h3></div>)
                 : null
              }
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
