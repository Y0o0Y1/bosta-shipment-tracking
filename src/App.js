import React, { Suspense } from "react";
import "./app.css"
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import TrackingShipment from "./components/TrackingShipment";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <TrackingShipment />
      </div>
    </div>
  );
}

export default App;
