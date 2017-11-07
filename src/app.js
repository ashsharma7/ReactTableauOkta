import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/common/Layout';
import HomePage from './components/home/HomePage';
import LoginPage from './components/auth/LoginPage';
import TableauPage from './components/tableau/TableauPage';
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/tableau" component={TableauPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
