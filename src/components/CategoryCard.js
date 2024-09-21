import React from 'react';

function CategoryCard({ bgImage, url }) {
    return (
        <div className='categoryCard'>
            <a href={url}>
                <img src={bgImage} />
                <div className='categoryCardTitle'>
                    Title
                </div>
            </a>
        </div>
    )
}

export default CategoryCard;