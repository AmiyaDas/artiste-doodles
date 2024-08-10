import logo from "../assets/logo.jpg"
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Detail() {
    return (
        <div className="header">
            <div>
                <FaSearch />
            </div>
            <div className="title">
                <img src={logo} alt="home1" className="logo" />
                <span className="title">Artiste Doodles</span>
            </div>
            <div>
                <FaUser />
                <FaShoppingCart />
            </div>
        </div>
    )
}

export default Detail;