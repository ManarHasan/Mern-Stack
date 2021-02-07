import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Starship = (props) => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + props.id +'/')
            .then(response => {
                setError("")
                setResult(response.data)
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
            })}, [])

    return (
        <div>
            <p>Name: {result.name}</p>
            <p>Model: {result.model}</p>
            <p>Manufacturer: {result.manufacturer}</p>
            <p>Length: {result.length}</p>

            {error ?
            <>
            <p>{error}</p>
            <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png"/>
            </>
            :
            ''
            }
        </div>
    )
}

export default Starship