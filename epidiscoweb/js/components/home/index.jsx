import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import EpiHeader from 'epi/components/header';
import EpiFooter from 'epi/components/footer';

import style from './style';

class EpiHome extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid className={style.wrap}>
          <Row>
            <Col xs={12}>
              <EpiHeader />
            </Col>
          </Row>
          {this.props.children}
          <Row>
            <Col xs={12}>
              <EpiFooter />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default EpiHome;
