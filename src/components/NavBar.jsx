import PropTypes from "prop-types";
import PokemonType from "../prop-types/PokemonType";

function NavBar({ setPokemonName, pokemonList }) {
  return (
    <div>
      {pokemonList
        .filter((pokemon) => pokemon.types.includes("water"))
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
  );
}

NavBar.propTypes = {
  setPokemonName: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(PokemonType).isRequired,
};

export default NavBar;
