import React, { createContext, useState } from 'react';
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
import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    isAuthenticated: false,
    name: '',
    email: '',
    password: '',
    photoUrl: '',
    success: ''
  });
  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <main>
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/destination/:placeName" component={Destination}></Route>
      <PrivateRoute path="/booking/:placeName">
        <Booking />
      </PrivateRoute>
      <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
      </main>
    </UserContext.Provider>
  );
}

export default App;
