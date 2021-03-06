import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Resume from './Resume.js'
import Contact from './Contact'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" component={Contact} />
        
        </Switch>

        <Footer />
      </div>

    </Router>

  );
}

export default App;
