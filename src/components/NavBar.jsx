import PropTypes from "prop-types";
import PokemonType from "../prop-types/PokemonType";

function NavBar({ setPokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          onClick={() => setPokemonIndex(index)}
          key={pokemon.name}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(PokemonType).isRequired,
};

export default NavBar;
