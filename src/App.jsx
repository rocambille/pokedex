import { useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

import pokemonList from "./data/pokemonList";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </header>
    </div>
  );
}

export default App;
