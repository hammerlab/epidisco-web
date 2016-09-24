import React, {Component} from 'react';

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Code from 'material-ui/svg-icons/action/code';
import CloudDownload from 'material-ui/svg-icons/file/cloud-download';

import footer from './style';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class EpiFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  render() {
    const selectnav = (index) => this.setState({selectedIndex: index});

    return (
      <Paper zDepth={1} className={footer.paper}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Contact"
            icon={<ContactMail className={footer.icon}/>}
            onTouchTap={() => selectnav(0)}
          />
          <BottomNavigationItem
            label="Source Code"
            icon={<Code className={footer.icon}/>}
            onTouchTap={() => selectnav(1)}
          />
          <BottomNavigationItem
            label="Pipeline"
            icon={<CloudDownload className={footer.icon}/>}
            onTouchTap={() => selectnav(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default EpiFooter;