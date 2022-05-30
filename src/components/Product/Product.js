import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    /* console.log(props.setAddToCart)
    console.log(props.product) */
    const { img, name, price } = props.product;
    const { setAddToCart } = props


    return (
        <div className='desktop'>
            <img className='image' src={img} alt="" />
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <button onClick={() => setAddToCart(props.product)} className='btn btn-success btn-container'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;