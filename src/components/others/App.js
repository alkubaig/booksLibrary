import React from 'react';
import Home from './Home';
import ValidateBook from './ValidateBook';

import Navbar from 'react-bootstrap/Navbar'



import '../CSS/App.css';

import  {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="appBackground">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/" >
      قاعدة بيانات المكتبة
      </Navbar.Brand>
      </Navbar>

      <div className="background">
        <div>
        <Switch>
          <Route path="/AddBookForm/:newBookId" component={ValidateBook} />
          <Route exact path="/" component= {Home} />
        </Switch>
        </div>
      </div>
    </div>
    </Router>

  );
}


export default App;
