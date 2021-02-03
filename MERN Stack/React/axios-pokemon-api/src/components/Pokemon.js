import { Button } from '@material-ui/core';
import axios from 'axios';
import React, {useState} from 'react'

const Pokemon = () => {
    const[pokemon, setPokemon] = useState([])
    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => setPokemon(response.data.results))
    }
    return (
        <div>
            <Button onClick={getPokemon} color="secondary">Pokemon</Button>
            <ul>
            {pokemon.length >0 && pokemon.map((pokemon, i) =>{ 
                return <li key={i}>{pokemon.name}</li>
            })}
            </ul>
        </div>
    )
}

export default Pokemon
