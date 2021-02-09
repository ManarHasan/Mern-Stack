import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] =useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/'+ id +"/edit", {
            title,
            price,
            description
        })
            .then(res => console.log(res));
        navigate("/product/"+ id);
    }

    return (
        <div>
            <h1>Update a Product: </h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label>
                    <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label>Price: </label>
                    <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label>Description: </label>
                    <textarea
                    type="text"
                    name="description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    >
                    </textarea>
                </p>
                <input type="submit" value="Update!"/>
            </form>
        </div>
    )
}

export default Update
