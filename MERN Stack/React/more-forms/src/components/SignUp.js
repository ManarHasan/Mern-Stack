import React, { useState } from 'react';

const SignUp = (props) => {
    const {inputs, setInputs} = props;
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const x = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        if(inputs.firstName.length !== 0){
            if(inputs.firstName.length < 3) {
                setFirstNameError("First name must be longer than two characters")
            } else {
                setFirstNameError("")
            }
        }
        if(inputs.lastName.length !== 0){
            if(inputs.lastName.length < 3){
                setLastNameError("Last name must be longer than two characters")
            } else {
                setLastNameError("")
            }
        }
        if(inputs.email.length !== 0) {
            if(inputs.email.length < 5) {
                setEmailError("Email must be at least 5 characters")
            } else {
                setEmailError("")
            }
        }
       
            if(inputs.password.length !== 0 && inputs.password.length < 8) {
                console.log(inputs.password)
                setPasswordError("Password must be at least 8 characters")
            } else {
                console.log(inputs.password)
                setPasswordError("")
            }
        
        if(inputs.confirm.length !== 0){
            if (inputs.confirm === inputs.password) {
                console.log(inputs.confirm)
                setConfirmError("")
            } else {
                console.log(inputs.confirm)
                setConfirmError("Passwords do not match")
            }
        }
    }

    return (
        <div>
            <form>
                First Name: <input type="text" name="firstName" onKeyUp ={x}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{firstNameError}</p>
                    : ''
                }
                Last Name: <input type="text" name="lastName" onKeyUp ={x}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{lastNameError}</p>
                    : ''
                }
                Email: <input type="email" name="email" onKeyUp ={x}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p>
                    : ''
                }
                Password: <input type="password" name="password" onKeyUp ={x} />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p>
                    : ''
                }
                Confrim: <input type="password" name="confirm" onChange ={x}/>
                {
                    confirmError ?
                    <p style={{color:'red'}}>{confirmError}</p>
                    : ''
                }
            </form>
        </div>
    )
}
export default SignUp;
