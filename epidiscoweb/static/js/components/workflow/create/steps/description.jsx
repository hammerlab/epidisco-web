import React from 'react';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import {Step, StepButton, StepContent} from 'material-ui/Stepper';
import TextField from 'material-ui/TextField';

import EpiSection from '../section';
import EpiActions from 'epi/actions';

import style from './style';


const EpiDescriptionStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Describe your workflow
    </StepButton>
    <StepContent>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent suscipit nisi ac erat egestas lobortis.
        Curabitur nulla lectus, sollicitudin eu lacus at, tincidunt dapibus lacus.
      </p>
    </StepContent>
  </Step>
);

const EpiDescription = (props) => {
  const desc = props.workflow.description;

  return (
    <EpiSection title="Workflow details">
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <TextField
              hintText="Lung Cancer Patient #42"
              floatingLabelText="Descriptive Name"
              value={desc.name}
              fullWidth={true}
              onChange={(e, v) => EpiActions.nameChanged(v)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextField
              hintText="somebody@hammerlab.org"
              floatingLabelText="E-mail address"
              value={desc.email}
              fullWidth={true}
              onChange={(e, v) => EpiActions.emailChanged(v)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <br />
            <TextField
              floatingLabelText="Unique identifier"
              value={desc.id}
              fullWidth={true}
              disabled={true}
            />
          </Col>
        </Row>
      </Grid>
    </EpiSection>
  );
};

export {EpiDescription, EpiDescriptionStep};
