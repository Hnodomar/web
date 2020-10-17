import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Library from './Library/Library';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
   <Router>
     <Nav />
     <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Library" component={Library} />
     </Switch>
   </Router>
  );
}

export default App;
