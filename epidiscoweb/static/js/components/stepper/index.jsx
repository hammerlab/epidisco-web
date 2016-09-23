import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import stepper from './style'

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class EpiStepper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
      stepIndex: 0,
    };
  }

  render() {
    const handleNext = () => {
      const {stepIndex} = this.state;
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
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
        <div className={stepper.button}>
          <RaisedButton
            label={stepIndex === 4 ? 'Finish' : 'Next'}
            disableTouchRipple={true}
            disableFocusRipple={true}
            primary={true}
            onTouchTap={handleNext}
            className={stepper.nextbutton}
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
       <div className={stepper.main}>
          <Stepper activeStep={this.state.stepIndex} orientation="vertical">
            <Step>
              <StepLabel className={stepper.label}>Describe your workflow</StepLabel>
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
              <StepLabel className={stepper.label}>Configure: Normal</StepLabel>
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
              <StepLabel className={stepper.label}>Configure: Tumor</StepLabel>
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
              <StepLabel className={stepper.label}>Configure: RNA (Optional)</StepLabel>
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
              <StepLabel className={stepper.label}>Configure: Additional tools</StepLabel>
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
            <p className={stepper.reset}>
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