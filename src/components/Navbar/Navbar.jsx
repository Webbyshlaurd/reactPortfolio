import React, { useState } from "react";
import styles from './Navbar.module.css';

import {getImageURL } from '../../utils';

export const Navbar = () => {
    
const  [menuOpen, setMenuOpen] = useState(false);/*  This line of code sets the
hamburger menu closed by default;
 */
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src = 
            {menuOpen 
            ? getImageURL("nav/closeIcon.png") 
            : getImageURL("nav/menuIcon.png")} alt="menu/button" onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}onclick={() => setMenuOpen(false)}>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Experience</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>


            </ul>
        </div>
    </nav>
};