import React, { useState } from 'react';
import fakedata from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const first20=fakedata.slice(0,5);
    const [products, setProduct] = useState(first20);
    const [cart, setCart] = useState([]);

    const handelAddProduct =(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        showAddToCart={true}
                        handelAddProduct={handelAddProduct}
                        product={product}   
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;