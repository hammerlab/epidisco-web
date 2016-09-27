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
      stepIndex: props.stepIndex || 0,
      completed: [],
    };
  }

  componentWillMount() {
    const {stepIndex, completed} = this.state;
    this.setState({completed: completed.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, completed} = nextState;
    if (completed.indexOf(stepIndex) === -1) {
      completed.setState({visited: completed.concat(stepIndex)});
    }
  }

  render() {
    const {stepIndex, completed} = this.state;

    return (
      <div className={style.main}>
        <Stepper
          linear={false}
          activeStep={stepIndex}
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
