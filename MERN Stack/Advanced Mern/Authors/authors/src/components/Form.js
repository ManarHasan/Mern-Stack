import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.submitHandler}>
            <label htmlFor="name">Name :</label>
            <input type="text" onChange={props.nameHandler} name="name" value={props.name}/>
            <input type="submit" value={props.value}/>
        </form>
    )
}

export default Form
