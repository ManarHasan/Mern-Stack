import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header from '../views/Header';
import Form from './Form';

const Update = (props) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [errors, setErrors] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => {
                setName(prevName => prevName = res.data[0].name)
            })
            .catch(err => setError("This id is invalid"));
            setLoaded(true);
    }, [])

    const nameHandler = e => setName(e.target.value);

    const submitHandler = e =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/author/"+props.id, {
            name
        })
            .then(res => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });
        
    }

    return (
        <>
        <Header />
        {errors?
        <p>{errors[0]}</p>
        :
        ""
        }
        {error?
        <p>{error}</p>
        :
        loaded && <Form submitHandler={submitHandler} name={name} nameHandler={nameHandler} value={"Edit Author"}/>
        }
        </>
    )
}

export default Update
