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
            Item 1
        </ToolbarItem>
        <ToolbarItem {...toolbar} as={Button}>
            Item 2
        </ToolbarItem>
        <ToolbarItem {...toolbar} as={Button}>
            Item 3
        </ToolbarItem>
        </Toolbar>
        </>
  );    
}

export default NavBar;