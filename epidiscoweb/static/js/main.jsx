import React from 'react';
import ReactDOM from 'react-dom';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EpiHome from './components/home';

ReactDOM.render(
  <MuiThemeProvider><EpiHome /></MuiThemeProvider>,
  document.getElementById('epidiscoweb')
);