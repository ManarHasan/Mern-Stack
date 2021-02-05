import React, {useState} from 'react'

const Test = () => {
    const[counter, setCounter] = useState(0);
    const clickHandler = () => {
        setCounter((prevCounter) => prevCounter + 1, () => console.log(counter))
        
    }
    return (
        <div>
            <button onClick={clickHandler}>+</button>
            <p>{counter}</p>
        </div>
    )
}

export default Test