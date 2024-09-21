import { FaInstagram, FaFacebook, FaWhatsapp, FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footerItem">
                    <a href="#">About Us</a>
                </div>
                <div className="footerItem">
                    <a href="#">Give Feedback</a>
                </div>
                <div className="footerItem">
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="footerIcons">
                <span>
                <FaInstagram />
                </span>
                <span>
                <FaFacebook />
                </span>
                <span>
                <FaWhatsapp />
                </span>
            </div>
            <div className="copyright">
                <FaRegCopyright /> 2024 Artiste Doodles | Developed by:
                <a href="https://www.amiyaranjan.in" target="blank">Amiya Ranjan</a>
            </div>
        </div>

    )
}

export default Footer;