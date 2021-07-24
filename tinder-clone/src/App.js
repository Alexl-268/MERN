import React from "react";
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    //BEM class convention
    <div className="app">

      <Header/>
      <TinderCards/>
      {/*SwipeButtons*/}
    </div>
  );
}

export default App;
