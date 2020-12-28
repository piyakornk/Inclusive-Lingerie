import React, {useState} from "react";
import {useToolbarState,Toolbar,ToolbarItem} from "reakit/Toolbar"; 
import {Button} from "reakit";
import {Link} from "react-router-dom";
 
function NavBar() {
    const toolbar = useToolbarState({ loop: true });
    const [click, setClick] = useState(false);
    const handleClick=()=> setClick(!click);

    return (
      <>
        <nav className="NavBar">
            <div className="NavBar container">
            <Link to="/" className = "NavBar Logo">
                <h1> LoveMe</h1>
            </Link>

            <div className = "menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
            </div>


             <Toolbar {...toolbar} aria-label="My toolbar">
                <ToolbarItem {...toolbar} as={Button}>
                    About Us
                </ToolbarItem>
                <ToolbarItem {...toolbar} as={Button}>
                    Size table
                </ToolbarItem>
                </Toolbar>    


            </div>
        </nav>

        </>
  );    
}

export default NavBar;