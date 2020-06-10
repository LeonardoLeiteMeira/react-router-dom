import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';


function App() {
  return (
    <div className="App">

      <nav>
        <div className="linkNavBar">
          <Link to="/">Home Page </Link>
        </div>

        <div className="linkNavBar">
          <Link to="/About"> About </Link>
        </div>

        <div className="linkNavBar">
          <Link to="/Contact"> Contact </Link>
        </div>

      </nav>

      <main id="main">
        <h1>Aplication to test react router dom</h1>
        <Switch>
          <Route path="/About" component={AboutPage} />
          <Route path="/Contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
