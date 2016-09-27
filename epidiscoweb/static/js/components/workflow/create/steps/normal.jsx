import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiNormalStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Normal
    </StepButton>
    <StepContent>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Vestibulum vel metus eu sapien malesuada ultricies non et tortor.
        Nam porta pulvinar finibus.
      </p>
    </StepContent>
  </Step>
);

const EpiNormal = (props) => (
  <EpiSection title="Normal Sequencing Files">
    <DataFiles
      files={props.workflow.normal.files}
      floatingLabelText="Normal data file"
      hintText="normal.fastq | normal.bam"
    />
  </EpiSection>
);

export {EpiNormal, EpiNormalStep};
