import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import { getById } from "../actions/Actions.js";
import Card from "../Card/Card.js";

function PokemonDetail() {
  let { id } = useParams();
 // const dispatch = useDispatch();
//  let pokemon = useSelector((state) => state.pokemon);
  const [pokemonDetail, setPokemonDetail] = useState({});

  useEffect(() => {
  //  dispatch(getById(id));
    getById()
   // setPokemonDetail(pokemon)
    // eslint-disable-next-line
  }, []);

  const getById = async () => {
    let pokedata = await axios.get(`http://localhost:5001/pokemons/${id}`);
    const pokemon=pokedata.data
    setPokemonDetail(pokemon)}

  return (
    <div>
      <Card
      key={pokemonDetail.id}
      pokemonDetail={pokemonDetail} />
    </div>
  );
}

export default PokemonDetail;
