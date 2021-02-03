import axios from 'axios';
import {InputLabel, Select, MenuItem} from '@material-ui/core';
import React, {useState, useEffect} from 'react'

const Search = () => {
    const[planets, setPlanets] = useState([]);
    const[id, setId] = useState(0);
    const[choice, setChoice] = useState("");
    const[result, setResult] = useState([]);
    const[error, setError] = useState("")
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/')
            .then(response =>{
                setPlanets(response.data.results)
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
            }).catch((error) => {
                error.response ? setError("These aren't the droids you're looking for") : setError("Unidentified error")
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
