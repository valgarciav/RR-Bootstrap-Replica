import "./App.css";
import React from "react";
import TopBar from "./Component/TopBar";
import Background from "./Component/Background";
import StoreListings from "./Component/StoreListing";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
