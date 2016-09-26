import React from 'react';
import {Stepper,Step, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {
  EpiNormalStep,
  EpiDescriptionStep,
  EpiTumorStep,
  EpiRNAStep,
  EpiToolsStep
} from '../steps';
import style from './style'

class EpiStepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      stepIndex: props.stepIndex || 0,
    };
  }

  render() {
    const handleNext = () => {
      const {stepIndex} = this.state;
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 3,
      });
    };

    const handlePrev = () => {
      const {stepIndex} = this.state;
      if (stepIndex > 0) {
        this.setState({stepIndex: stepIndex - 1});
      }
    };

    return (
      <div className={style.main}>
        <Stepper
          activeStep={this.state.stepIndex}
          orientation="vertical"
        >
          {EpiDescriptionStep()}
          {EpiNormalStep()}
          {EpiTumorStep()}
          {EpiRNAStep()}
          {EpiToolsStep()}
        </Stepper>
      </div>
    );
  }
}

export default EpiStepper;
