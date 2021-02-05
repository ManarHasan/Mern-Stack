import axios from 'axios';
import {navigate} from '@reach/router';
import {InputLabel, Select, MenuItem} from '@material-ui/core';
import React, {useState, useEffect} from 'react'

const Search = () => {
    const[id, setId] = useState(0);
    const[choice, setChoice] = useState("");
    const[result, setResult] = useState({});
    const[error, setError] = useState("")
    const[homeplanet, setHomePlanet] = useState("")

    useEffect(() => {
    if(choice === 'people'){
    axios.get(result.homeworld)
    .then(response => setHomePlanet(response.data.name))}}
    ,[result])

    const changeHandler = (e) => {
        setId(e.target.value)
    }

    const searchDone = (e) => {
        e.preventDefault();
        axios.get('https://swapi.dev/api/'+choice+'/' + id +'/')
            .then(response => {
                setError("")
                setResult((prevResult) => {
                    return {...prevResult, ...response.data}
                })
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
            })
        navigate('/' + choice + '/' + id)
    }
    return (
        <div>
            <form onSubmit={searchDone}>
            <InputLabel id="choice">Planet or Person:</InputLabel>
            <Select onChange={e => setChoice(e.target.value)} labelId="choice" id="choice">
                <MenuItem value='planets'>Planet</MenuItem>
                <MenuItem  value='people'>Person</MenuItem>
                <MenuItem  value='starships'>Starships</MenuItem>
                <MenuItem  value='species'>Species</MenuItem>
            </Select>
            <input type="text" name="id" placeholder="place the id here" onChange={changeHandler} />
            <input type="submit" value="Search"/>
            </form>
            
            {choice === 'planets' ?
                <>
                <p>Name: {result.name}</p>
                <p>Climate: {result.climate}</p>
                <p>Diameter: {result.diameter}</p>
                <p>Population: {result.population}</p>
                </>
            :choice === 'people' ?
                <>
                <p>Name: {result.name}</p>
                <p>Birth Year: {result.birth_year}</p>
                <p>Eye Color: {result.eye_color}</p>
                <p>Gender: {result.gender}</p>
                <p>Homeworld: {homeplanet}</p>
                <a href={result.homeworld}>Homeworld</a>
                </>
            :choice === 'starships' ?
            <>
                <p>Name: {result.name}</p>
                <p>Model: {result.model}</p>
                <p>Manufacturer: {result.manufacturer}</p>
                <p>Length: {result.length}</p>
                </>
            :choice === 'species' ?
            <>
            <p>Name: {result.name}</p>
            <p>Classification: {result.classification}</p>
            <p>Skin Colors: {result.skin_colors}</p>
            <p>Hair Colors: {result.hair_colors}</p>
            </>
            :
            ''
            }
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

export default Search

