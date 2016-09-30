import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, Redirect} from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import EpiHome from 'epi/components/home';
import EpiWelcome from 'epi/components/welcome';
import {EpiView, EpiCreate} from 'epiwf';

import uuid from 'uuid';


const newId = uuid.v1();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={EpiHome}>
      <IndexRoute component={EpiWelcome} />
      <Route path="create/:workflowId" component={EpiCreate} />
      <Route path="view/:workflowId" component={EpiView} />
      <Redirect from="new" to={`create/${newId}`} />
      <Route path="*" component={EpiWelcome} />
    </Route>
  </Router>,
  document.getElementById('epidiscoweb')
);
