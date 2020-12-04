import React, { Component } from "react";
import Autopilot from "../components/ Autopilot";
import AppDownlod from "../components/AppDownlod";
import Carousel from "../components/Carousel";
import InvestmentCalculator from "../components/InvestmentCalculator";
import MeetCompass from "../components/MeetCompass";

class App extends Component {
  

  render() {
    return (
     <div>
        <Carousel/>
        <MeetCompass/>
        <Autopilot/>
        <InvestmentCalculator/>
        <AppDownlod/>
     </div>
    );
  }
}

export default App;
