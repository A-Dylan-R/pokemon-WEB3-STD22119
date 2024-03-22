import React from 'react';
import Link from 'next/link';

const PokemonList = ({ pokemons }) => {
    return (
        <div>
            <h2>List of Pokemons</h2>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.name}>
                        <span>{pokemon.name}</span>
                        <Link href={`/client/${pokemon.id}`}>
                            <a>Details</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;