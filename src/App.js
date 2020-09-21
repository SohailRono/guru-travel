import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/TopBar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';

function App() {
  return (
   <main>
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/destination/:placeName" component={Destination}></Route>
      </Switch>
    </Router>
   </main>
  );
}

export default App;
