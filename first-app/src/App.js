import React from 'react';
import './App.css';
import MyCounter from "./components/Counter";
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import About from "./components/About";
import Gallery from "./components/Gallery";
import HitDetails from "./components/HitDetails";
function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-brand m-2">
            <ul className="navbar-nav">
                <li>
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li>
                    <Link className="nav-link"  to="/counter">Counter</Link>
                </li>
                <li>
                    <Link className="nav-link"  to="/about">About</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
            </ul>
        </nav>
        <div className="m-4">
            <Switch>
                <Route path="/home"/>
                <Route path="/counter" component={MyCounter}/>
                <Route path="/about" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/hitDetails/:id" component={HitDetails}/>
            </Switch>
        </div>
    </Router>
  )
}

export default App;
