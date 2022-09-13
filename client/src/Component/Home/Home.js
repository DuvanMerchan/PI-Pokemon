import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { getAll } from "../actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import './Home.css'
import { Filters } from "../Filters/Filters";
import { ordered, tipos } from "../../helper/Filtros";
import SearchBar from "../SearchBar/SearchBar";

function Home() {
  const dispatch = useDispatch();
  let pokemons = useSelector((state) => state.pokemons);
  let type = useSelector((state) => state.type);
  let order =useSelector((state) => state.order);

  if(type) pokemons = tipos(type,pokemons)
  if(order) pokemons = ordered(order,pokemons)

  const[currenPage, setCurrentPage] = useState(1)
  let pokemonPerPage = 12

  useEffect(() => {
    dispatch(getAll());
    // eslint-disable-next-line
  }, []);

  const lastPoke = currenPage * pokemonPerPage
  const firstPoke = lastPoke-pokemonPerPage

  const pagePoke = () => {
    if (pokemons.length>1) {return  pokemons.slice(firstPoke,lastPoke);
    }else{ 
      return [pokemons]}
  } 

  const paginaPoke = pagePoke()

  function Pagina (paginaNum) {
    setCurrentPage(paginaNum)
  }
  const pageNumbers = []
  if(pokemons.length>1){
  for (let i = 0; i < Math.ceil(pokemons.length/pokemonPerPage); i++) {
    pageNumbers.push(i+1)       
}  }

  return (
    <div>
    <Filters />
    <SearchBar />
    <Cards
    key={paginaPoke.id}
    pokemons={paginaPoke} 
    />
 
        <div>
            <h2>paginado</h2>
      {  pageNumbers.map(number=>(
            <button key={number} onClick={()=>Pagina(number)}>{number}</button>
        ))}
        </div>
    </div>
  );
}
export default Home;
