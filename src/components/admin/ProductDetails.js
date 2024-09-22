import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let { productId } = useParams();
    return (
        <div>ProductDetails:{productId}</div>
    )
}

export default ProductDetails