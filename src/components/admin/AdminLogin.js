import React, { useState } from 'react';
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';


function AdminLogin() {
    const navigateTo = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUserName = (event) => {
        event.preventDefault();
        setUserName(event.target.value)
    }

    const handlePassword = (event) => {
        event.preventDefault();
        setPassword(event.target.value)
    }

    const loginHandler = (event) => {
        event.preventDefault();
        if (userName.toUpperCase() === "ADMIN" && password === "Neha@14694") {
            navigateTo("/admin/products")
        } else {
            alert("Wrong user name or password!")
        }
        setUserName("");
        setPassword("");
    }

    return (
        <div className='admin'>

            <div className='loginPanel'>
                <div className='adminHeader'>
                    <div>
                        <img src={logo} alt="home1" className="logo" />
                    </div>
                    <div className="title">Admin - Artiste Doodles</div>
                </div>
                <form onSubmit={loginHandler}>
                    <input className="username" type="text" placeholder='Username' value={userName} onChange={handleUserName}></input>
                    <input className="password" type="password" placeholder='Password' value={password} onChange={handlePassword}></input>
                    <button className='activeButton'>Login As Admin</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin;