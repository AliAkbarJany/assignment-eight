import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ReactModal from '../ReactModal/ReactModal';
import './Shop.css'

const Shop = () => {

    const [products, setPrducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch('desktop.json')
            .then(res => res.json())
            .then(data => setPrducts(data))
    }, [])

    const setAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);


        // setCart(product)
    }
    const randomProduct = () => {
        let random = cart[Math.floor(Math.random() * cart.length)]
        console.log(random)
    }

    // console.log(products)
    return (
        <div className='shop-container'>
            <div className='desktops-container'>

                {
                    products.map(product => <Product key={product.id} product={product} setAddToCart={setAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Selected Desktop</h3>
                {
                    cart.map(item => <p key={item.id}>  Desktop Name : {item.name}</p>)
                }
                <button onClick={randomProduct} className='btn btn-secondary'>Choose 1 For Me</button>

            </div>

        </div>
    );
};

export default Shop;