import React from 'react';
import {Link} from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import BlurCircular from 'material-ui/svg-icons/image/blur-circular';

const EpiHeaderLeft = () => (
  <Link to="/">
    <IconButton><BlurCircular color="white" /></IconButton>
  </Link>
);

const EpiHeaderRight = () => (
  <Link to="/new">
    <RaisedButton
      label="New Workflow"
      secondary={true}
      style={{marginTop: 5}}
      labelStyle={{color: 'white'}}
    />
  </Link>
);

const EpiHeader = () => (
  <AppBar
    title="Epidisco-web"
    iconElementLeft={<EpiHeaderLeft />}
    iconElementRight={<EpiHeaderRight />}
  />
);

export default EpiHeader;
