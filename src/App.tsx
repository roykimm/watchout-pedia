import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TvPage from './pages/TvPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/tv" component={TvPage} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/tv/:id" component={TvDetail} />
      </Switch>
    </Router>
  );
}

export default App;
