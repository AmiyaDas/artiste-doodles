import React from 'react';
import category1 from '../assets/category1.png'
import CategoryCard from './CategoryCard';

function Categories() {
    return (
        <div className='category'>
            <div className='categoryHeader'>
                SHOP BY CATEGORIES
            </div>
            <div className='categoryCardsContainer'>
                <CategoryCard bgImage={category1} url="https://www.google.com" />
                <CategoryCard bgImage={category1} url="https://www.google.com" />
                <CategoryCard bgImage={category1} url="https://www.google.com" />
            </div>
        </div>
    )
}

export default Categories;