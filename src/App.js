import React from "react";
import './App.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import SizeTable from "./components/pages/SizeTable";
import Catalogue from "./components/pages/Catalogue";
import Product from "./components/pages/Product";


function App() {
  return (
    <>
      <a href="#content" id="skip-link" alt="skip to main content">Skip to main content</a>
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/SizeTable" exact component={SizeTable} />
          <Route path={"/Catalogue/:type"} exact component={Catalogue} />
          <Route path={"/Product/:id"} exact component={Product} />
        </Switch>
        <Footer />
      </Router>

    </>

  );

}

export default App;
