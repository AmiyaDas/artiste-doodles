import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.scss"

const ProductCard = ({ image, id, title, price, mrp }) => {
    const url = "/admin/products/" + id;
    const discount = 100 - Math.round(price * 100 / mrp);
    return (
        <div className='product-card'>
            <Link to={url}>
                <img src={image} />
                <div className='product-card-details'>
                    <div className='title'>
                        {title}
                    </div>
                    <div className='mrp'>
                        {mrp}<span className='discount'>{discount + "%"}</span>
                    </div>
                    <div className='price'>
                        {price}
                    </div>
                    Title
                </div>
            </Link>
        </div>
    )
}

export default ProductCard