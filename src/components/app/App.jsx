import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailContainer from '../../containers/DetailContainer';
import QuoteyQuotes from '../../containers/Quotefn';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <QuoteyQuotes />
        </Route>
        <Route exact path="/:id">
          <DetailContainer />
        </Route>
      </Switch>
    </Router>
  );
}
