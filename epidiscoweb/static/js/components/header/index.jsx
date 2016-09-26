import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import BlurCircular from 'material-ui/svg-icons/image/blur-circular';

const EpiHeader = () => (
  <AppBar
    title="Epidisco-web"
    iconElementLeft={<IconButton><BlurCircular /></IconButton>}
  />
);

export default EpiHeader;
