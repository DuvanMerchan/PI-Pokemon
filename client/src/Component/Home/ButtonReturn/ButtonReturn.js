import React, { 
    //useEffect, 
    useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../actions/Actions";
import './ButtonReturn.css'

function ButtonReturn(){
    const pokemons = useSelector((store)=>store.pokemons)
    const dispatch = useDispatch()
    // eslint-disable-next-line
    const [pokemon, setPokemon] = useState(pokemons)
    
    // useEffect(()=>{
    //     dispatch(getAll())
    // },[])
    const onClick = (e)=>{
        e.preventDefault();
        dispatch(getAll())
        setPokemon(pokemons)
    }
return(
   <button onClick={onClick} className="flecha"></button>
)
} 

export default ButtonReturn