import { FaInstagram, FaFacebook, FaWhatsapp, FaRegCopyright } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-item">
                    <a href="#">About Us</a>
                </div>
                <div className="footer-item">
                    <a href="#">Give Feedback</a>
                </div>
                <div className="footer-item">
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="footer-icons">
                <FaInstagram />
                <FaFacebook />
                <FaWhatsapp />
            </div>
            <div className="copyright">
                <FaRegCopyright /> 2024 Artiste Doodles | Developed by:
                <a href="https://www.amiyaranjan.in" target="blank">Amiya Ranjan</a>
            </div>
        </div>

    )
}

export default Footer;