import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
});

export default PokemonType;
