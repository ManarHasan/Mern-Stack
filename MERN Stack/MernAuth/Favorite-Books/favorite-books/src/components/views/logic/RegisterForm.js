import React, { useState } from 'react'
import axios from 'axios'
import {navigate, Link} from '@reach/router'

const RegisterForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("")
    
    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", {
            firstName,
            lastName,
            email,
            password
        })
            .then(res => {
                props.getToken(res.data.token);
                navigate("/");
                
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" name="firstName" onChange={firstNameHandler} value={firstName}/>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" name="lastName" onChange={lastNameHandler} value={lastName}/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" onChange={emailHandler} value={email}/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={passwordHandler} value={password}/>
            <input type="submit" value="Register"/>
        </form>
        <Link to="/login">Already have an account?</Link>
        </>
    )
}

export default RegisterForm
