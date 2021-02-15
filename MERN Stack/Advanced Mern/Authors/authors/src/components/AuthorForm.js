import React, {useState} from 'react';
import axios from 'axios';
import Header from '../views/Header';
import { navigate } from '@reach/router';
import Form from './Form';

const AuthorForm = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState([]);

    const nameHandler = e => setName(e.target.value);

    const submitHandler = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {
            name
        })
            .then(res =>{
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setError(errorArr);
            });
    }

    return (
        <>
        <Header />
        <Form submitHandler={submitHandler} name={name} nameHandler={nameHandler} value={"Add an author"}/>
        {error.length?
        <p>{error[0]}</p>
        :
        ""
        }
        </>
    )
}

export default AuthorForm
