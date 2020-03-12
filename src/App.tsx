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
          <Link to="/Home">Home Page </Link>
        </div>

        <div className="linkNavBar">
          <Link to="/About"> About </Link>
        </div>

        <div className="linkNavBar">
          <Link to="/Contact"> Contact </Link>
        </div>

      </nav>

      <main id="main">
        <Switch>
          <Route path="/Home" component={HomePage} />
          <Route path="/About" component={AboutPage} />
          <Route path="/Contact" component={ContactPage} />
        </Switch>
      </main>

      <footer>
        Footer of the page
      </footer>
    </div>
  );
}

export default App;
