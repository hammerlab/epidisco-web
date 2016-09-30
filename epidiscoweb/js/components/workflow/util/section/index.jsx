import React, {Component} from "react";

import Paper from "material-ui/Paper";
import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";

import ClearFix from "material-ui/internal/ClearFix";

import style from "./style";


const EpiSectionTitle = ({title}) => (
  <Toolbar>
    <ToolbarGroup>
      <ToolbarTitle text={title} />
    </ToolbarGroup>
  </Toolbar>
);

class EpiSection extends Component {
  render() {
    const children = this.props.children;

    return (
      <Paper className={style.paper}>
        <div className={style.root}>
          <div>
            <EpiSectionTitle title={this.props.title} />
          </div>
        </div>
        <ClearFix className={style.block}>{children}</ClearFix>
      </Paper>
    );
  }
}

export default EpiSection;
