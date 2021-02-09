import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DisplayProducts from './components/DisplayProducts';
import ProductForm from './components/ProductForm';

export default () => {
    const [products, setProducts] = useState("");
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
    })

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div>
            <ProductForm />
            <hr/>
            {loaded && <DisplayProducts products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
