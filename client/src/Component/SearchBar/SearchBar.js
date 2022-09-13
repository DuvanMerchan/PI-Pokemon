import React, { useState } from "react";
import './SearchBar.css'
import {useDispatch} from 'react-redux'
import { getByName } from "../actions/Actions";

function SearchBar() {

    const dispatch = useDispatch()

    const[pokemons, setPokemons] = useState('')

    const handleInputChange = (e) => {
        setPokemons(e.target.value);
      };

    const submit = (e) => {
        e.preventDefault();
        dispatch(getByName(pokemons))
        setPokemons('')
    }
    
    return(
        <div  className="searchBar">
        <form onSubmit={submit}>
            <input
            type='text'
            id='searchterm'
            value={pokemons}
            onChange={handleInputChange}
            placeholder="Encuentra tu pokemon..."
            className="box_Search" 
           ></input>
            <input type='submit' className='button' value='find'></input>
        </form>
        </div>
    )
}

export default SearchBar