import React from 'react';
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"
import styles from "./ComingSoon.module.scss";

function ComingSoon() {
    return (

        <div className={styles.comingSoonBody}>
            <div>
                <img src={logo} alt="home1" className={styles.logo} />
            </div>
            <div className={styles.title}>Artiste Doodles</div>
            <div className={styles.header}>Great things coming soon...</div>
            <div className={styles.subHeader}>Stay tuned</div>
            <div className={styles.instagram}>
                <a className={styles.icon} href="https://www.instagram.com/artistedoodles.jewellery/">
                    <FaInstagram />
                </a>
                <div>Meanwhile you can check our collection on instagram</div>

            </div>

        </div>
    )
}

export default ComingSoon;