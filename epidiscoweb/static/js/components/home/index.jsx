import React from 'react';

import home from './style';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import EpiHeader from '../header';
import EpiStepper from '../stepper';

import {EpiDescription, EpiNormal, EpiTumor, EpiRNA, EpiTools} from '../workflow';

const EpiHome = () => (
  <Grid fluid className={home.wrap}>
    <Row>
      <Col xs={12}>
        <EpiHeader />
      </Col>
    </Row>
    <Row>
      <Col xs={4}>
        <div>
         <EpiStepper />
        </div>
      </Col>
      <Col xs={8}>
        <EpiDescription />
        <EpiNormal />
        <EpiTumor />
        <EpiRNA />
        <EpiTools />
      </Col>
    </Row>
  </Grid>
);

export default EpiHome;