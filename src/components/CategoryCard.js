import React from 'react';

function CategoryCard({ bgImage, url }) {
    return (
        <div className='category-card'>
            <a href={url}>
                <img src={bgImage} />
                <div className='category-card-title'>
                    Title
                </div>
            </a>
        </div>
    )
}

export default CategoryCard;