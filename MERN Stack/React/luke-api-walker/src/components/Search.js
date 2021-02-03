import axios from 'axios';
import {InputLabel, Select, MenuItem} from '@material-ui/core';
import React, {useState, useEffect} from 'react'

const Search = () => {
    const[planets, setPlanets] = useState([]);
    const[id, setId] = useState(0);
    const[choice, setChoice] = useState("");
    const[result, setResult] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/')
            .then(response =>{
                setPlanets(response.data.results)
                console.log(response.data)
                console.log(planets)
    })
    }, []);
    const changeHandler = (e) => {
        setId(e.target.value)

    }
    const searchDone = (e) => {
        e.preventDefault();
        axios.get('https://swapi.dev/api/'+choice+'/' + id +'/')
            .then(response => {
                setResult(response.data)
                console.log(response.data.results)
            })
        
    }
    return (
        <div>
            <form onSubmit={searchDone}>
            <InputLabel id="choice">Planet or Person:</InputLabel>
            <Select onChange={e => setChoice(e.target.value)} labelId="choice" id="choice">
                <MenuItem value='planets'>Planet</MenuItem>
                <MenuItem  value='people'>Person</MenuItem>
            </Select>
            <input type="text" name="id" placeholder="place the id here" onChange={changeHandler} />
            <input type="submit" value="Search"/>
            </form>
            
            {choice === 'planets' ?
                <>
                <p>{result.name}</p>
                <p>{result.climate}</p>
                <p>{result.diameter}</p>
                <p>{result.population}</p>
                </>
            :
                <>
                <p>{result.name}</p>
                <p>{result.birth_year}</p>
                <p>{result.eye_color}</p>
                <p>{result.gender}</p>
                </>
            }
        </div>
    )
}

export default Search
