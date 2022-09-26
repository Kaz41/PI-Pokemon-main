import './App.css';
import React, { useEffect } from 'react';
import {Link, Route} from 'react-router-dom';
import PokemonsCards from './components/PokemonCards';
import Pokemon from './components/Pokemon';
import {useDispatch} from "react-redux";
import { getTypes, getPokemons } from './components/actions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <Route exact path = "/" render={
        () => <div className="App">
                  <h1>Henry Pokemon</h1> 
                  <Link to="/pokemons">INICIAR</Link>
              </div>}>
      </Route>
      <Route path="/pokemons" component={PokemonsCards}/>
      <Route path="/pokemon" component={Pokemon}/>
    </>
  );
}
