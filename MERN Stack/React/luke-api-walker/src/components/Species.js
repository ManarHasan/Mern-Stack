import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Species = (props) => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/species/' + props.id +'/')
            .then(response => {
                setError("")
                setResult(response.data)
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
            })}, [])

    return (
        <div>
            <p>Name: {result.name}</p>
            <p>Classification: {result.classification}</p>
            <p>Skin Colors: {result.skin_colors}</p>
            <p>Hair Colors: {result.hair_colors}</p>

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

export default Species
