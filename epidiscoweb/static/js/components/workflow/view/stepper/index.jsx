import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

const EpiStepper = () => (
  <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
    <Stepper activeStep={0}>
      <Step completed={true}>
        <StepLabel>Workflow submitted</StepLabel>
      </Step>
      <Step>
        <StepLabel>Started the analysis</StepLabel>
      </Step>
      <Step>
        <StepLabel>Results are available</StepLabel>
      </Step>
    </Stepper>
  </div>
);

export default EpiStepper;
