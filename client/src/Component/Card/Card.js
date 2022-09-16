import React from "react";
import Stats from '../Stats/Stats';
import './Card.css'
import { typeColor, colorPoke, textColorPoke } from "../Styled/TypeColor";

function Card({ pokemonDetail }) {
  return (<div className="conteinerCard">
    <figure className="card-Conteiner" key={pokemonDetail.id}>
        <div className="img-card-Conteiner">
        <img
          className="img-Pokemon"
          src={pokemonDetail.img}
          alt="pokeImg"
          ></img>
          <h1>{pokemonDetail.name}</h1>
          <h2>#{pokemonDetail.id}</h2>
      </div>
      <figcaption className="dataCard">
      <div className="typyStats">
        <h2>Tipos</h2>
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
        </div>
        <div className="height_weight">
          <div></div>
          <h4>HEIGHT:{pokemonDetail.height/10}m</h4>
          <h4>WEIGHT:{pokemonDetail.weight/10}Kg</h4>
        </div>
      </figcaption>
    </figure></div>
  );
}

export default Card;
