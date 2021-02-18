import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {navigate} from '@reach/router';

const Home = props => {
    const [books, setBooks] = useState([])
    const[loaded, setLoaded] = useState(false)
    

    useEffect(() => {
        axios.get("http://localhost:8000/allBooks")
        .then(res => {
            setBooks(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err));
    }, [])

    const buttonHandler = id => {
        console.log(props.token.id)
        axios.put("http://localhost:8000/add/" + props.token.id, {
            id
        })
            .then(res => console.log(res))
            
    }

    return (
        <div>
            {loaded && books.map((book, i) => {
                return (
                <>
                <p key={i}>{book.name}</p>
                <button onClick={e => buttonHandler(book._id)} >Add</button>
                </>
                )
            })}
        </div>
    )
}

export default Home
