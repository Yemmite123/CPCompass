import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Link
import NavbarPage from "./components/NavbarPage";
import Home from "./Pages/Home";
import "./index.css";
import "./smartphonesMediaQueries.css";
import "./desktopsaAndLaptops.css";
import "./iPads.css";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { FAQs } from "./Pages/FAQs";
import TermsandConditions from "./Pages/TermsandConditions";
import Disclaimer from "./Pages/Disclaimer";
import Cookies from "./Pages/Cookies";
import AML from "./Pages/AML";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class App extends Component {
  
  render() {
    return (
        <Router>
        <NavbarPage/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About">
            <About/>
          </Route>

          <Route path="/Contact">
            <Contact/>
          </Route>

          <Route path="/FAQs">
            <FAQs/>
          </Route>

          <Route path="/TermsandConditions">
            <TermsandConditions/>
          </Route>

          <Route path="/WebDisclaimer">
            <Disclaimer/>
          </Route> 

          <Route path="/CookiesPolicy">
            <Cookies/>
          </Route> 

          <Route path="/AMLPolicy">
            <AML/>
          </Route> 
        </Switch>
        <Footer/>
        </Router>
    );
  }
}

export default App;
