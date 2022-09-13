import React from "react";


function Card({pokemonDetail}) {
  return (
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
          ? pokemonDetail?.type.map((t) => <h3 key={t}>{t}</h3>)
          : null}
      </div>
            <div>
            <p>PS: {pokemonDetail.hp}</p>
            <p>ATK: {pokemonDetail.attack}</p>
            <p>DEF: {pokemonDetail.defense}</p>
            <p>SP.ATK: {pokemonDetail.sp_attack}</p>
            <p>SP.DEF: {pokemonDetail.sp_attack}</p>
            <p>SPEED: {pokemonDetail.speed}</p>
      </div>
      <div>
        <p>HEIGHT:{pokemonDetail.height}</p>
        <p>WEIGHT:{pokemonDetail.weight}</p>
      </div>
      </figcaption>
    </figure>
  );
}

export default Card;
