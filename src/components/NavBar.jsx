import { useState } from "react";
import PropTypes from "prop-types";
import PokemonType from "../prop-types/PokemonType";

function NavBar({ setPokemonName, pokemonList }) {
  const [type, setType] = useState("all");

  return (
    <>
      <select value={type} onChange={(event) => setType(event.target.value)}>
        <option>all</option>
        <option>water</option>
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
