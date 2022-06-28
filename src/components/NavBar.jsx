import PropTypes from "prop-types";
import PokemonType from "../prop-types/PokemonType";

function NavBar({ setPokemonIndex, pokemonList }) {
  const previous = () =>
    setPokemonIndex(
      (previous) => (previous - 1 + pokemonList.length) % pokemonList.length
    );

  const next = () =>
    setPokemonIndex((previous) => (previous + 1) % pokemonList.length);

  return (
    <div>
      <button type="button" onClick={previous}>
        previous
      </button>
      <button type="button" onClick={next}>
        next
      </button>
    </div>
  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(PokemonType).isRequired,
};

export default NavBar;
