import React, {Component, PropTypes} from 'react';

import IconButton from 'material-ui/IconButton';
import CodeIcon from 'material-ui/svg-icons/action/code';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import transitions from 'material-ui/styles/transitions';

import ClearFix from 'material-ui/internal/ClearFix';

import classNames from 'classnames';
import section from './style';

const EpiSectionTitle = ({title}) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={title} />
    </ToolbarGroup>
  </Toolbar>
);

class EpiSection extends Component {
  propTypes: {
    children: PropTypes.node,
    title: PropTypes.string
  }

  render() {
    const children = this.props.children;

    return (
      <Paper className={section.paper}>
        <div className={section.root}>
          <div>
            <EpiSectionTitle title={this.props.title} />
          </div>
        </div>
        <ClearFix className={section.block}>{children}</ClearFix>
      </Paper>
    );
  }
}

export default EpiSection;
