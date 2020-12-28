import React from "react"; 
import './App.css';

import NavBar from "./components/NavBar";
import SizeTable from "./components/SizeTable";
import ProductCard from "./components/ProductCard";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App(){
    return(
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
  
    <SizeTable />
    <ProductCard />
</>
           
);

}

export default App;
