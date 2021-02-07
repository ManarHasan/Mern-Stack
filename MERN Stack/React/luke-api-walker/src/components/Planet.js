import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Planet = (props) => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [homeplanet, setHomePlanet] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + props.id +'/')
            .then(response => {
                setError("")
                setResult(response.data)
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
            })}, [])
    
    return (
        <div>
                <p>Name: {result.name}</p>
                <p>Rotation Period: {result.rotation_period}</p>
                <p>Orbital Period: {result.orbital_period}</p>
                <p>Diameter: {result.diameter}</p>
            
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

export default Planet
