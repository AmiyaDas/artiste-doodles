import React from 'react';
import OfferCard from './OfferCard';
import offerImg from '../assets/offer.png'
function Offers() {
    return (
        <div className='offers'>
            <div className='offers-header'>
                SHOP EXCITING OFFERS
            </div>
            <div className='offers-cards-container'>
                <OfferCard bgImage={offerImg} url="https://www.google.com" />
                <OfferCard bgImage={offerImg} url="https://www.google.com" />
                <OfferCard bgImage={offerImg} url="https://www.google.com" />
                <OfferCard bgImage={offerImg} url="https://www.google.com" />
            </div>
        </div>
    )
}

export default Offers;