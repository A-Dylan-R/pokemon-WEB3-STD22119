import React from 'react';

const PokemonDetail = ({ pokemon }) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p>Number: {pokemon.order}</p>
        </div>
    );
};

export default PokemonDetail;