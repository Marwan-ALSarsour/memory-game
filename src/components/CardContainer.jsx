import { useState, useEffect } from 'react';
import Card from './Card';

const CardContainer = ({ handleScore }) => {
    const [cards, setCards] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const pokemonIds = [
                1, 4, 7, 25, 133, 143, 150, 151, 39, 52,
                54, 94, 6, 9, 3, 130, 149, 59, 65, 78
            ];

            const pokemonData = await Promise.all(
                pokemonIds.map(async (id) => {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                    const data = await res.json();
                    return {
                        id: data.id,
                        name: data.name,
                        image: data.sprites.front_default
                    };
                })
            );
            setCards(pokemonData);
        };
        fetchPokemons();
    }, []);

    const shuffleCards = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    const handleClick = (id) => {
        if (clickedCards.includes(id)) {
            handleScore(true);
            setClickedCards([]);
        } else {
            handleScore(false);
            setClickedCards([...clickedCards, id]);
        }
        setCards(shuffleCards(cards));
    };

    return (
        <div className="card-grid">
            {cards.map(pokemon => (
                <Card key={pokemon.id} pokemon={pokemon} handleClick={handleClick} />
            ))}
        </div>
    );
};

export default CardContainer;