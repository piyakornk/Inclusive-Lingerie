import React, {useState} from "react";
import {useToolbarState,Toolbar,ToolbarItem} from "reakit/Toolbar"; 
import {Button} from "reakit";
import {Link} from "react-router-dom";
import LoveMeLogo from "./LoveMeLogo.svg";
import './NavBar.css';

 
function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick=()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const toolbar = useToolbarState({ loop: true });
     
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
      <>
        <nav className="navbar">
            
            <div className="navbar-container">
            <Link to="/Home" className = "navbar-logo">
            <img src={LoveMeLogo} alt="The logo of Love Me"/>
            </Link>
            
            <div className = "menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
            </div>

            <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                <Toolbar {...toolbar} aria-label="My toolbar">
                <ToolbarItem {...toolbar} as={Button}>
                    <Link to='/Catalogue' className='nav-links' onClick={closeMobileMenu}>
                        Bras
                    </Link>
                </ToolbarItem>
                <ToolbarItem {...toolbar} as={Button}>
                    <Link to='/Catalogue' className='nav-links' onClick={closeMobileMenu}>
                        Panties
                    </Link>
                </ToolbarItem>
                <ToolbarItem {...toolbar} as={Button}>
                    <Link to='/Catalogue' className='nav-links' onClick={closeMobileMenu}>
                        Sets
                    </Link>
                </ToolbarItem>
                </Toolbar>

                
                
                
                <Toolbar {...toolbar} aria-label="My toolbar">
                <ToolbarItem {...toolbar} as={Button}>
                    <Link to='/AboutUs' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                    </Link>
                </ToolbarItem>
                <ToolbarItem {...toolbar} as={Button}>
                    <Link to='/SizeTable' className='nav-links' onClick={closeMobileMenu}>
                    Size Table
                    </Link>
                </ToolbarItem>
                </Toolbar>    
            </ul>

            </div>
            
            
        </nav>

        </>
  );    
}

export default NavBar;