import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/login", {
            email,
            password
        })
            .then(res => navigate("/"))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" onChange={emailHandler} value={email}/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" onChange={passwordHandler} value={password}/>
            <input type="submit" value="Login"/>
        </form>
    )
}

export default LoginForm
