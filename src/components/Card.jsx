const Card = ({ pokemon, handleClick }) => (
    <div className="card" onClick={() => handleClick(pokemon.id)}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
    </div>
);
export default Card;