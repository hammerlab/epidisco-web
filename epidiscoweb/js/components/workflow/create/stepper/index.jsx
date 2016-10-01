import React, {PropTypes} from "react";
import {Stepper} from "material-ui/Stepper";

import style from "./style";


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

  componentWillUpdate(nextProps) {
    const {stepIndex} = nextProps;
    if(stepIndex != this.props.stepIndex) {
      this.setState({stepIndex});
    }
  }

  render() {
    const {stepIndex} = this.state;

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
EpiStepper.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  completed: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default EpiStepper;
