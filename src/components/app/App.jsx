import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailContainer from '../../containers/DetailContainer';
import QuoteContainer from '../../containers/QuoteContainer.jsx';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:character">
          <DetailContainer />
        </Route>
        <Route path="/">
          <QuoteContainer />
        </Route>
      </Switch>
    </Router>
  );
}
