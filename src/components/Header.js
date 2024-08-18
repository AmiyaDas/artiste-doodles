import logo from "../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Header() {
    const [showSearch, setShowSearch] = useState(false);

    const searchInput = function () {
        if (showSearch) {
            return (
                <div className="search">
                    <FaSearch onClick={handleShowSearch} />
                    <input className="search-input">
                    </input>
                </div>
            );
        } else {
            return (
                <div className="search">
                    <FaSearch onClick={handleShowSearch} />
                </div>
            )
        }
    }

    const handleShowSearch = function () {
        setShowSearch(true);
    }

    return (
        <div className="header">
            {searchInput()}
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

export default Header;