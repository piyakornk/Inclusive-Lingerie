import {
    useToolbarState,
    Toolbar,
    ToolbarItem,
    ToolbarSeparator,
  } from "reakit/Toolbar";
  import { Button } from "reakit/Button";
  
function Bar() {
    const toolbar = useToolbarState({ loop: true });
    return (
      <Toolbar {...toolbar} aria-label="My toolbar">
        <ToolbarItem {...toolbar} as={Button}>
          Item 1
        </ToolbarItem>
        <ToolbarItem {...toolbar} as={Button}>
          Item 2
        </ToolbarItem>
        <ToolbarSeparator {...toolbar} />
        <ToolbarItem {...toolbar} as={Button}>
          Item 3
        </ToolbarItem>
      </Toolbar>
    );
  }
  
  export default Bar;
  