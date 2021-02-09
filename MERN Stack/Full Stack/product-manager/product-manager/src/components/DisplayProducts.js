import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import Button from '@material-ui/core/Button';

const DisplayProducts = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
    }
    return (
        <div>
            {props.products.map((product, i) => {
                return (
                    <>
                <p key={i}>{product.title} {product.price} {product.description}</p>
                <Link to={`/product/${product._id}`} >Go to Product</Link>
                <Button color="primary" onClick={(e) => {deleteProduct(product._id)}}>
                    Delete
                </Button>
                </>
                )
            })}
        </div>
    )
}

export default DisplayProducts
