import React from 'react';

function OfferCard({ bgImage, url }) {
    return (
        <div className='offer-card'>
            <a href={url}>
                <img src={bgImage} />
            </a>
        </div>
    )
}

export default OfferCard;