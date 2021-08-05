import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <div>
            <ul>
              <li>
                <Link to "/">Home</Link>
              </li>
              <li>
                <Link to=
              </li>
            </ul>
          </div>          
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/sign-up'>
              <SignUp />
            </Route>
            <Route path='/tracker'>
              <Tracker />
            </Route>
            <Route path='login'>
              <Login />
            </Route>              
          </Switch>
      </Router>
    </>
  );
}

export default App;
