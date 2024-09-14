import logo from "../assets/logo.png"
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Header({ showSearch = false, showUser = false, showCart = false }) {
    const [showSearchInput, setShowSearchInput] = useState(showSearch);

    const searchInput = function () {
        if (showSearch) {
            if (showSearchInput) {
                return (
                    <div className="search">
                        <FaSearch onClick={handleShowSearchInput} />
                        <input className="search-input">
                        </input>
                    </div>
                );
            } else {
                return (
                    <div className="search">
                        <FaSearch onClick={handleShowSearchInput} />
                    </div>
                )
            }
        } else {
            return <div></div>
        }

    }

    const handleShowSearchInput = function () {
        setShowSearchInput(true);
    }

    return (
        <div className="header">
            {searchInput()}
            <div className="title">
                <img src={logo} alt="home1" className="logo" />
                <span className="title">Artiste Doodles</span>
            </div>
            <div>
                {showUser ? <FaUser /> : <></>}
                {showCart ? <FaShoppingCart /> : <></>}
            </div>
        </div>
    )
}

export default Header;