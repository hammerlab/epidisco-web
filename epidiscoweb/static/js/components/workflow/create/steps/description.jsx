import React from 'react';

import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import LocalOffer from 'material-ui/svg-icons/maps/local-offer';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';
import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';

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
  const chips = desc.tags.map(
    (t, i) => (
      <Chip key={i} className={style.chip} style={{margin: 5}}>
        {t}
      </Chip>
    )
  );

  return (
    <EpiSection title="Workflow details">
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <TextField
              hintText="Lung Cancer Patient #42"
              floatingLabelText="Run Name"
              value={desc.name}
              fullWidth={true}
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
            />
          </Col>
        </Row>
        <Row middle="xs" center="xs">
          <Col xs={1}>
            <LocalOffer />
          </Col>
          <Col xs={11}>
            <div className={style.chips}>
              {chips}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextField
              hintText={"HLA-A*01:01\nHLA-A*02:01"}
              floatingLabelText="HLA Types (one per line - optional)"
              multiLine={true}
              fullWidth={true}
              rows={2}
              rowsMax={6}
              value={desc.hlas.join("\n")}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
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
