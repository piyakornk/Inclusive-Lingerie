import React from "react"; 
import './App.css';

import NavBar from "./components/NavBar";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import SizeTable from "./components/pages/SizeTable";
import Catalogue from "./components/pages/Catalogue";
import Product from "./components/pages/Product";


function App(){
    return(
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/AboutUs" exact component= {AboutUs} />
          <Route path="/SizeTable" exact component= {SizeTable} />
          <Route path="/Catalogue" exact component= {Catalogue} />
          <Route path="/Product" exact component= {Product} />
        </Switch>
      </Router>
  
</>
           
);

}

export default App;
