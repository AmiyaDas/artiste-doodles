import React from 'react'
import Header from '../Header'
import ProductCard from './ProductCard'
import category1 from '../../assets/category1.png'

const ProductList = () => {
    return (
        <div>
            <Header />
            <div className='filter-header'></div>
            <div className='products-container'>
                <ProductCard image={category1} id="123" title="test prod" price="100" mrp="150"/>
            </div>
        </div>
    )
}

export default ProductList