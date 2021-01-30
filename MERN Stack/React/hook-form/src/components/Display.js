import React from 'react'

const Display = (props) => {
    const {data} = props;
    return (
        <div>
            <h3>Your form data</h3>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
            <p>Confirm Password: {data.confirm}</p>
        </div>
    )
}
export default Display;
