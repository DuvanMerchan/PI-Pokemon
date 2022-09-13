import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar.js'
import './App.css';
import LandingPage from './Component/LandingPage/LandingPage.js';
import Home from './Component/Home/Home.js';
import CreatePokemon from './Component/CreatePokemon/CreatePokemon.js';
import PokemonDetail from './Component/Pokemondetail/Pokemondetail.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAll, getTypes } from './Component/actions/Actions.js';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTypes())
    dispatch(getAll())
  })
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path= '/' component={LandingPage}></Route>
      <Route path= '/Home' component={Home}></Route>
      <Route path= '/newpokemon' component={CreatePokemon}></Route>
      <Route exact path= '/detail/:id' component={PokemonDetail}></Route>
    </BrowserRouter>
  );
}

export default App;
