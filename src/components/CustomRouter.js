import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Layout';
import HomePage from './HomePage';

export default function CustomRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  );
}
