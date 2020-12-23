import React from "react"; 
import './App.css';
import Product from './Product';
import { Provider, Button } from "reakit";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

import {
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
} from "reakit/Toolbar";

import {
  unstable_useGridState as useGridState,
  unstable_Grid as Grid,
  unstable_GridRow as GridRow,
  unstable_GridCell as GridCell,
} from "reakit/Grid";



function App(){
  const tab = useTabState({ selectedId: null });
  const toolbar = useToolbarState({ loop: true });
  const grid = useGridState();
  return(
    <>
      <h1>LoveMe</h1>

          <TabList {...tab} aria-label="My tabs">
              <Tab {...tab}>Bras</Tab>
              <Tab {...tab}>Panties</Tab>
              <Tab {...tab}>Sets</Tab>
            </TabList>
            <TabPanel {...tab}><Product/></TabPanel>
            <TabPanel {...tab}>Butts</TabPanel>
            <TabPanel {...tab}>Full Body</TabPanel>

        <ToolbarSeparator {...toolbar} />

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

        <ToolbarSeparator {...toolbar} />

            <Button>Button</Button>

        <ToolbarSeparator {...toolbar} />

            <Grid {...grid} aria-label="My grid">
              <GridRow {...grid}>
                <GridCell {...grid}>cell</GridCell>
                <GridCell {...grid}>cell</GridCell>
                <GridCell {...grid}>cell</GridCell>
              </GridRow>
              <GridRow {...grid}>
                <GridCell {...grid}>cell</GridCell>
                <GridCell {...grid}>cell</GridCell>
                <GridCell {...grid}>cell</GridCell>
              </GridRow>
              <GridRow {...grid}>
                <GridCell {...grid}>cell</GridCell>
                <GridCell {...grid}>cell</GridCell>
                <GridCell {...grid}>cell</GridCell>
              </GridRow>
            </Grid>
  </>
);

}

export default App;
