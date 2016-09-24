import React from 'react';

import home from './style';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import EpiHeader from '../header';
import EpiStepper from '../stepper';
import EpiFooter from '../footer';

import {EpiDescription, EpiNormal, EpiTumor, EpiRNA, EpiTools} from '../workflow';

const EpiHome = (props) => (
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
        <EpiDescription description={props.description} />
        <EpiNormal files={props.normal.files} />
        <EpiTumor files={props.tumor.files} />
        <EpiRNA files={props.rna.files} />
        <EpiTools tools={props.tools} />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <EpiFooter />
      </Col>
    </Row>
  </Grid>
);

export default EpiHome;