import React from "react"; 
import './App.css';
import Product from './Product';
import {  Button } from "reakit";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";

import {
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
} from "reakit/Toolbar";


import NavBar from "./NavBar";
import SizeTable from "./SizeTable";
import ProductCard from "./ProductCard";


function App(){
  const tab = useTabState({ selectedId: null });
  const toolbar = useToolbarState({ loop: true });
  return(
    <>
    <NavBar />
    <SizeTable />
    <ProductCard />
      

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
</>
           
);

}

export default App;
