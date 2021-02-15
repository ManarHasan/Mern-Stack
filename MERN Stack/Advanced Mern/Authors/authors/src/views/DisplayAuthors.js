import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Delete from '../components/Delete';
import { navigate } from '@reach/router';

const DisplayAuthors = () => {
    const[authors, setAuthors] = useState("");
    const[loaded, setLoaded] = useState(false);

    useState(() => {
        axios.get("http://localhost:8000/api/all-authors")
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
    }, [])

    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/delete/"+id)
            .then(res => setAuthors(authors.filter((author) => author._id != id)))
    }

    const nav = (id) => {
        navigate("/update/"+id);
    }

    return (
        <div>
            <Header />
            {loaded && authors.map((author) => {
                return (
                <>
                <div>{author.name}</div>
                <Button variant="contained" color="primary" onClick = {(e) => nav(author._id)}>Edit</Button>
                <Delete deleteAuthor={e => deleteAuthor(author._id)}/>
                </>
                )
            })}
        </div>
    )
}

export default DisplayAuthors
