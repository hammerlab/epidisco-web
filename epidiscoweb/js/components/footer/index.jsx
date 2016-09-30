import React, {Component} from "react";

import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import ContactMail from "material-ui/svg-icons/communication/contact-mail";
import Code from "material-ui/svg-icons/action/code";
import CloudDownload from "material-ui/svg-icons/file/cloud-download";

import footer from "./style";


class EpiFooter extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
  }

  render() {
    return (
      <Paper zDepth={1} className={footer.paper}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            className={footer.label}
            label="Hammer Lab"
            href="http://hammerlab.org/contact/"
            icon={<ContactMail className={footer.icon}/>}
          />
          <BottomNavigationItem
            className={footer.label}
            label="Epidisco-web"
            href="https://github.com/hammerlab/epidisco-web/"
            icon={<Code className={footer.icon}/>}
          />
          <BottomNavigationItem
            className={footer.label}
            label="Epidisco"
            href="https://github.com/hammerlab/epidisco/"
            icon={<CloudDownload className={footer.icon}/>}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default EpiFooter;
