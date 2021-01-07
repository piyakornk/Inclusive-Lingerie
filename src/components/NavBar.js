import React, { useState } from "react";
//import {Button} from "reakit";
import { Link } from "react-router-dom";
import LoveMeLogo from "./LoveMeLogo.svg";
import './NavBar.css';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <header className="navbar" id="header" role="navigation">

                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">

                        <img src={LoveMeLogo} alt="The logo of Love Me" />

                    </Link>

                    <a aria-label="Menu" className="menu-icon"  onClick={handleClick} title="Menu">
                        <i className={click ? "fas fa-times": "fas fa-bars"} > </i>
                    </a>

                    


                    <ul aria-label="Bras, Panties, Sets, About us and Size Table" className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className='nav-item'>
                            <Link to={"/Catalogue/100"} className='nav-links' onClick={closeMobileMenu}>
                                Bras
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/Catalogue/200"} className='nav-links' onClick={closeMobileMenu}>
                                Panties
                                 </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/Catalogue/300"} className='nav-links' onClick={closeMobileMenu}>
                                Sets
                                 </Link>
                        </li>


                        <li className='nav-item'>
                            <Link
                                to='/AboutUs'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Us
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/SizeTable'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Size Table
                                </Link>
                        </li>

                    </ul>

                </div>
            </header>
        </>
    );
}

export default NavBar;