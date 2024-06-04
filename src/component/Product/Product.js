import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, price, stock, seller, img, id } = props.product;
    return (
        <div className='product-containt'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-diteils'>
                <h3><Link to={'/product/' + id} >{name}</Link></h3>
                <h5>Seller : {seller}</h5>
                <h3>${price}</h3>
                <p>Avalebel now {stock} </p>
                {
                    props.showAddToCart === (true) && <button
                        onClick={() => props.handelAddProduct(props.product)}
                    ><b>Bye now</b> </button>
                }
            </div>
        </div>
    );
};

export default Product; <h1>Product secton active</h1> 