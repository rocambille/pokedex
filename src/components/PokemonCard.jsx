import PokemonType from "../prop-types/PokemonType";

function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc != null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PokemonType.isRequired,
};

export default PokemonCard;
