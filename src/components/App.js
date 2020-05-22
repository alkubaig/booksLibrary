import React from 'react';
import Home from './Home';
import ValidateForm from './ValidateForm';
import {Constants} from '../Domains/Constants';


import Navbar from 'react-bootstrap/Navbar'
import '../CSS/App.css';

import  {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="appBackground">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" > {Constants.appTitle} </Navbar.Brand>
      </Navbar>

      <div className="background">
        <div>
        <Switch>
          <Route path="/AddBookForm/:newBookId" component={ValidateForm} />
          <Route exact path="/" component= {Home} />
        </Switch>
        </div>
      </div>
    </div>
    </Router>

  );
}


export default App;
