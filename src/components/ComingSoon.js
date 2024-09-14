import React from 'react';
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"

function ComingSoon() {
    return (

        <div className="coming-soon-body">
            <div>
                <img src={logo} alt="home1" className="logo" />
            </div>
            <div className="title">Artiste Doodles</div>
            <div className="header">Great things coming soon...</div>
            <div className="sub-header">Stay tuned</div>
            <div className="instagram">
                <a className='icon' href="https://www.instagram.com/artistedoodles.jewellery/">
                    <FaInstagram />
                </a>
                <div>Meanwhile you can check our collection on instagram</div>

            </div>

        </div>
    )
}

export default ComingSoon;