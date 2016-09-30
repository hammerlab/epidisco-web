import React from 'react';
import {Stepper,Step, StepLabel, StepContent} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

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
    const {stepIndex} = nextProps;
    if(stepIndex != this.props.stepIndex) {
      this.setState({stepIndex});
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
          {this.props.children}
        </Stepper>
      </div>
    );
  }
}

export default EpiStepper;
