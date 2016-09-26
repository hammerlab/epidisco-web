import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

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

    const renderStepActions = (step) => {
      const stepIndex = this.state.stepIndex;

      return (
        <div className={style.button}>
          <RaisedButton
            label={stepIndex === 4 ? 'Finish' : 'Next'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={handleNext}
            className={style.nextbutton}
          />
          {step > 0 && (
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              disableTouchRipple={true}
              disableFocusRipple={true}
              onTouchTap={handlePrev}
            />
          )}
        </div>
      );
    }

     return (
       <div className={style.main}>
          <Stepper activeStep={this.state.stepIndex} orientation="vertical">
            <Step>
              <StepLabel className={style.label}>Describe your workflow</StepLabel>
              <StepContent>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent suscipit nisi ac erat egestas lobortis.
                  Curabitur nulla lectus, sollicitudin eu lacus at, tincidunt dapibus lacus.
                </p>
                {renderStepActions(0)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel className={style.label}>Configure: Normal</StepLabel>
              <StepContent>
                <p>
                  Nam ligula nibh, laoreet vel dignissim in, aliquam in felis.
                  Suspendisse vitae libero a nisi aliquam egestas vel et justo.
                  Aenean nec libero ligula. Nam ut aliquet tellus, ut lobortis dui.
                </p>
                {renderStepActions(1)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel className={style.label}>Configure: Tumor</StepLabel>
              <StepContent>
                <p>
                  Praesent sem risus, fermentum et euismod sed, sollicitudin a dolor.
                  Sed non pulvinar nisi, ut mattis lectus.
                  Duis in tincidunt mi.
                  In finibus suscipit volutpat.
                </p>
                {renderStepActions(2)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel className={style.label}>Configure: RNA (Optional)</StepLabel>
              <StepContent>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                  Vestibulum vel metus eu sapien malesuada ultricies non et tortor.
                  Nam porta pulvinar finibus.
                </p>
                {renderStepActions(3)}
              </StepContent>
            </Step>
            <Step>
              <StepLabel className={style.label}>Configure: Additional tools</StepLabel>
              <StepContent>
                <p>
                  Nullam odio metus, tincidunt a volutpat id, tristique ac felis.
                  Fusce imperdiet fermentum diam ac maximus.
                  Pellentesque vulputate ligula at sem fringilla euismod.
                </p>
                {renderStepActions(4)}
              </StepContent>
            </Step>

          </Stepper>
          {this.finished && (
            <p className={style.reset}>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the example.
            </p>
          )}
        </div>
      );
  }
}

export default EpiStepper;
