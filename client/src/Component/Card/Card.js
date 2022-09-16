import React from "react";
import Stats from '../Stats/Stats';
import './Card.css'
import { typeColor, colorPoke, textColorPoke } from "../Styled/TypeColor";

function Card({ pokemonDetail }) {
  return (<div className="conteiner">
    <figure className="card-Conteiner" key={pokemonDetail.id}>
      <div className="img-Conteiner">
        <img
          className="img-Pokemon"
          src={pokemonDetail.img}
          alt="pokeImg"
        ></img>
      </div>
      <figcaption>
        <h1>{pokemonDetail.name}</h1>
        <h3>#{pokemonDetail.id}</h3>
        <p>Tipos</p>
        <div>
          {pokemonDetail.type
            ? pokemonDetail?.type.map((t, index) => {
                return (
                  <button
                    className="typeButton"
                    style={{
                      backgroundColor: typeColor(colorPoke, t),
                      color: typeColor(textColorPoke, t),
                      border: typeColor(textColorPoke, t),
                    }}
                    key={index}
                  >
                    {t.toUpperCase()}
                  </button>
                );
              })
            : null}
        </div>
        <div>
          <Stats valor={pokemonDetail.hp} nombre={'PS'} />
          <Stats valor={pokemonDetail.attack} nombre={'ATK'} />
          <Stats valor={pokemonDetail.defense} nombre={'DEF'} />
          <Stats valor={pokemonDetail.sp_attack} nombre={'SP.ATK'} />
          <Stats valor={pokemonDetail.sp_defense} nombre={'SP.DEF'} />
          <Stats valor={pokemonDetail.speed} nombre={'SPEED'} />
        </div>
        <div>
          <p>HEIGHT:{pokemonDetail.height}</p>
          <p>WEIGHT:{pokemonDetail.weight}</p>
        </div>
      </figcaption>
    </figure></div>
  );
}

export default Card;
