import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Homepage</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
      {/* <Home />
      <About />
      <Contact /> */}
    </div>
  );
}

export default App;
