import $ from 'jquery';
import _ from 'underscore';

import React from 'react';
import ReactDOM from 'react-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'font-awesome/css/font-awesome.css';

import EpidiscoWebStyle from '../css/style.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
   <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

console.log("all done!");