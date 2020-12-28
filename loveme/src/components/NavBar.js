import React from "react";
import {
    useToolbarState,
    Toolbar,
    ToolbarItem
  } from "reakit/Toolbar"; 
  import { Button } from "reakit";
 
function NavBar() {
    const toolbar = useToolbarState({ loop: true });
    return (
      <>
        <Toolbar {...toolbar} aria-label="My toolbar">
        <ToolbarItem {...toolbar} as={Button}>
            Bras
        </ToolbarItem>
        <ToolbarItem {...toolbar} as={Button}>
            Panties
        </ToolbarItem>
        <ToolbarItem {...toolbar} as={Button}>
            Sets
        </ToolbarItem>
        </Toolbar>

        <h1> LoveMe</h1>

        <Toolbar {...toolbar} aria-label="My toolbar">
        <ToolbarItem {...toolbar} as={Button}>
            About Us
        </ToolbarItem>
        <ToolbarItem {...toolbar} as={Button}>
            Size table
        </ToolbarItem>
        </Toolbar>

        </>
  );    
}

export default NavBar;