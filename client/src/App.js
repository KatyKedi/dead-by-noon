import React from 'react';
import './App.css';
import NavSide from "./components/NavSide";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* if currUser show NavSide */}
      <NavSide />
    </div>
  );
}

export default App;
