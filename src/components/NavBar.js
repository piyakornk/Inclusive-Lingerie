import React, { useState } from "react";
//import {Button} from "reakit";
import { Link } from "react-router-dom";
import LoveMeLogo from "./LoveMeLogo.svg";
import './NavBar.css';


function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    /*
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setClick(!click);
        }
    }
    */

    return (
        <nav>
            <header className="navbar" id="header" role="menubar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" role="menuitem" tabIndex="0">
                        <img src={LoveMeLogo} alt="The logo of Love Me" name="LoveMe" />
                    </Link>

                    <button className="menu-icon"
                        onClick={handleClick}
                        //onKeyPress={_handleKeyDown}
                        title="Menu/Close"
                        aria-label="Menu-Close"
                        role="menuitem"
                        aria-haspopup="true"
                        tabIndex="0" 
                        >
                        <p className={click ? "fas fa-times" : "fas fa-bars"} > </p>
                    </button>

                    <ul className={click ? 'nav-menu active' : 'nav-menu hidden'} role="menu" aria-label="Bras, Panties, Sets, About us and Size Table" >
                        <li className='nav-item'>
                            <Link to={"/Catalogue/100"} className='nav-links' onClick={closeMobileMenu} role="menuitem" tabIndex="0">
                                Bras
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/Catalogue/200"} className='nav-links' onClick={closeMobileMenu} role="menuitem" tabIndex="0">
                                Panties
                                 </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={"/Catalogue/300"} className='nav-links' onClick={closeMobileMenu} role="menuitem" tabIndex="0">
                                Sets
                                 </Link>
                        </li>


                        <li className='nav-item'>
                            <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu} role="menuitem" tabIndex="0">
                                About Us
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/SizeTable' className='nav-links' onClick={closeMobileMenu} role="menuitem" tabIndex="0">
                                Size Tables
                                </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </nav>
    );
}

export default NavBar;