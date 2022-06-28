import { useEffect, useState } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";

import pokemonList from "./data/pokemonList";

function App() {
  const [pokemonName, setPokemonName] = useState(pokemonList[0].name);

  useEffect(() => {
    console.log("hello pokemon trainer :)");
  });

  return (
    <div className="App">
      <header className="App-header">
        <NavBar setPokemonName={setPokemonName} pokemonList={pokemonList} />
        <PokemonCard
          pokemon={pokemonList.find((pokemon) => pokemon.name === pokemonName)}
        />
      </header>
    </div>
  );
}

export default App;
