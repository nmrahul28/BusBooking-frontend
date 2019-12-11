import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home';
import Trips from './Components/Trips';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}></Route>
        <Route path='/trips' component={Trips}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;


