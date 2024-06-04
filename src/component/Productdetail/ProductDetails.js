import React from 'react';
import Product from '../Product/Product';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';

const ProductDetails = () => {
    const {productId}=useParams();
    const product= fakeData.find(pd => pd.id === productId);
    return (
        <div>
            <Product showAddToCart={false} product={product}></Product>
            
        </div>
    );
};

export default ProductDetails;