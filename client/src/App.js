import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import PokemonsCards from './components/PokemonCards';
import Nav from "./components/NavBar"
import Pokemon from './components/Pokemon';

export default function App() {

  return (
    <React.Fragment>
      <Route path="/nav" component={Nav}/>
      <Route exact path = "/" render={
        () => <div className="App"> <h1>Henry Pokemon</h1> </div>}>
      </Route>
      <Route path="/pokemons" component={PokemonsCards}/>
      <Route path="/pokemon" component={Pokemon}/>
    </React.Fragment>
  );
}
