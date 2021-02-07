import axios from 'axios';
import {navigate} from '@reach/router';
import {InputLabel, Select, MenuItem} from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState, useEffect} from 'react'

const Search = () => {
    const[id, setId] = useState(0);
    const[choice, setChoice] = useState("");
    const[result, setResult] = useState({});
    const[error, setError] = useState("")
    const[homeplanet, setHomePlanet] = useState("")

    const changeHandler = (e) => {
        setId(e.target.value)
    }

    const searchDone = (e) => {
        e.preventDefault();
        choice ==="people"? navigate('/people/' + id) :choice === "planets" ? navigate('/planets/'+ id) :choice === "starships"? navigate('/starships/' + id) : navigate('/species/' +id)
    }

    return (
        
            <Form onSubmit={searchDone}>
                <InputLabel id="choice">Select Category:</InputLabel>
                <Select onChange={e => setChoice(e.target.value)} labelId="choice" id="choice">
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value='planets'>Planet</MenuItem>
                    <MenuItem  value='people'>Person</MenuItem>
                    <MenuItem  value='starships'>Starships</MenuItem>
                    <MenuItem  value='species'>Species</MenuItem>
                </Select>
                <Form.Control type="text" name="id" placeholder="place the id here" onChange={changeHandler} />
                <Button variant="primary" type="submit">Search!</Button>
            </Form>
            
            
            
            
    )
}

export default Search;
