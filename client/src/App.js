import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Nav } from './components/Nav';

import Book from './pages/Book';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Book} />
        <Route exact path="/book" component={Book} />
        <Route exact path="/book/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;