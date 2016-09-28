import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import Assignment from 'material-ui/svg-icons/action/assignment';

import style from './style';

const EpiStepper = () => (
  <Grid fluid className={style.stepper}>
    <Row center="xs">
      <Col xs={12}>
        <Stepper activeStep={2}>
          <Step completed={true}>
            <StepLabel>Workflow submitted</StepLabel>
          </Step>
          <Step completed={true}>
            <StepLabel>Workflow completed</StepLabel>
          </Step>
          <Step completed={true}>
            <StepLabel>Results are available</StepLabel>
          </Step>
        </Stepper>
      </Col>
    </Row>
    <Row center="xs">
      <Col xs={4}>
        <RaisedButton
          label="View Results"
          icon={<Assignment />}
          fullWidth={true}
          href="https://storage.googleapis.com/protoepidisco-results/training-demo/index.html"
        />
      </Col>
    </Row>
  </Grid>
);

export default EpiStepper;
