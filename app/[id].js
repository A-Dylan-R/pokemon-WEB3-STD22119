import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonDetail from '../components/PokemonDetail';

const PokemonDetailPage = ({ id }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            setPokemon(response.data);
        };

        fetchPokemon();
    }, [id]);

    return (
        <div>
            {pokemon && <PokemonDetail pokemon={pokemon} />}
        </div>
    );
};

PokemonDetailPage.getInitialProps = async ({ query }) => {
    const { id } = query;
    return { id };
};

export default PokemonDetailPage;