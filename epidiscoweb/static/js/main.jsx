import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import EpiHome from 'epi/components/home';
import EpiWelcome from 'epi/components/welcome';
import {EpiView, EpiCreate} from 'epiwf';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={EpiHome}>
      <IndexRoute component={EpiWelcome} />
      <Route path="create/:workflowId" component={EpiCreate} />
      <Route path="view/:workflowId" component={EpiView} />
      <Route path="*" component={EpiWelcome} />
    </Route>
  </Router>,
  document.getElementById('epidiscoweb')
);
