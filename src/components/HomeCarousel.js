import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel1.jpg";
import carousel3 from "../assets/carousel1.jpg";


function HomeCarousel() {
    const handleClick = function(index,item){
        console.log("index:"+index)
        console.log(item)
    }
    return (
        <div className="home-carousel">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} onClickItem={handleClick}>
                <div>
                    <img src={carousel1}/>
                </div>
                <div>
                    <img src={carousel2} />
                </div><div>
                    <img src={carousel3} />
                </div>
            </Carousel>
        </div>
    )
}

export default HomeCarousel;