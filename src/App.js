import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Pages/HomePage.js';
import TripsPage from './Pages/TripsPage.js';
import Trips from '../src/Components/Trips.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
        <Route path='/trips' component={TripsPage}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;


