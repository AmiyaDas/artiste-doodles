import React from 'react';
import { Link } from 'react-router-dom';
import './AdminStyle.scss'

const ProductCard = ({ images, id, title, price, mrp }) => {
    const url = "/admin/products/" + id;
    const discount = 100 - Math.round(price * 100 / mrp);
    return (
        <div className='productCard'>
            <Link to={url}>
            {/* show multiple images here as carousel */}
                <img src={images[0]} />
                <div className='productCardDetails'>
                    <div className='title'>
                        {title}
                    </div>
                    <div >
                        <span className='mrp'>{"Rs." + mrp}</span>
                        <span className='discount'>{"(" + discount + "% OFF)"}</span>
                    </div>
                    <div className='price'>
                        {"Rs." + price}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard