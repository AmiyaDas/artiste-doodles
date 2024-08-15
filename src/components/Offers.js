import React from 'react';
import OfferCard from './OfferCard';
import offerImg from '../assets/offer.png'
function Offers() {
    return (
        <div className='offers'>
            <div className='offers-header'>
                SHOP EXCITING OFFERS
            </div>
            <div className='cards-container'>
                <OfferCard bgImage={offerImg} url="https://www.google.com" />
                <OfferCard />
                <OfferCard />
                <OfferCard />
            </div>
        </div>
    )
}

export default Offers;