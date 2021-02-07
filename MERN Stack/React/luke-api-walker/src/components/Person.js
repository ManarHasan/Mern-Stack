import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Person = (props) => {
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
    const [homeplanet, setHomePlanet] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + props.id +'/')
            .then(response => {
                setError("")
                setResult(response.data)
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
            })}, [])
    

    useEffect(() => {
        axios.get(result.homeworld)
        .then(response => setHomePlanet(response.data.name))}
        ,[result])
    
    return (
        <div>
                <p>Name: {result.name}</p>
                <p>Birth Year: {result.birth_year}</p>
                <p>Eye Color: {result.eye_color}</p>
                <p>Gender: {result.gender}</p>
                <p>Homeworld: {homeplanet}</p>
                <a href={result.homeworld}>Homeworld</a>
            
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

export default Person