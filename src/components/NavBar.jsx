import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokemonType from "../prop-types/PokemonType";

function NavBar({ setPokemonName, pokemonList }) {
  const [type, setType] = useState("all");

  const availableTypes = [
    "grass",
    "poison",
    "fire",
    "flying",
    "water",
    "electric",
    "psychic",
  ];

  useEffect(() => {
    if (type === "electric") {
      setInterval(() => alert("pika pikachu !!!"), 5000);
    }
  }, [type]);

  return (
    <>
      <select value={type} onChange={(event) => setType(event.target.value)}>
        <option>all</option>
        {availableTypes.map((availableType) => (
          <option key={availableType}>{availableType}</option>
        ))}
      </select>
      <div>
        {pokemonList
          .filter((pokemon) => type === "all" || pokemon.types.includes(type))
          .map((pokemon) => (
            <button
              type="button"
              onClick={() => setPokemonName(pokemon.name)}
              key={pokemon.name}
            >
              {pokemon.name}
            </button>
          ))}
      </div>
    </>
  );
}

NavBar.propTypes = {
  setPokemonName: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(PokemonType).isRequired,
};

export default NavBar;
