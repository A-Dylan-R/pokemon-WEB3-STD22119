import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../components/PokemonList';

const ServerPage = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
            setPokemons(response.data.results);
        };

        fetchPokemons();
    }, []);

    return (
        <div>
            <PokemonList pokemons={pokemons} />
        </div>
    );
};

export default ServerPage;