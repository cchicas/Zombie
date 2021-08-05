import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
//import { Tracker, Login } from './components/pages
import { Tracker } from './components/pages/Tracker'
import { Login } from './components/pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
{/*              <li>
                <Link to='/sign-up'>Sign Up</Link>
              </li>
*/}              
              <li>
                <Link to='/tracker'>Tracker</Link>
              </li>
              <li>
                <Link to='login'>Login</Link>
              </li>
            </ul>
          </div>          
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
{/*            <Route path='/sign-up'>
              <SignUp />
            </Route>
*/}            
            <Route path='/tracker'>
              <Tracker />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>              
          </Switch>
      </Router>
    </>
  );
}

export default App;
