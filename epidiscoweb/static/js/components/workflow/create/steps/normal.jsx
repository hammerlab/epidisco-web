import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiNormalStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Normal Sample
    </StepButton>
    <StepContent>
      <p>
        We recommend use of data from (at least) 150X whole-exome sequencing
        of the fresh-frozen normal sample with 125bp reads using a library prep
        based on sonication (and not tagmentation).
      </p>
    </StepContent>
  </Step>
);

const EpiNormal = (props) => (
  <EpiSection title="Sequencing Data From Normal Tissue Sample">
    <DataFiles
      files={props.workflow.normal.files}
      floatingLabelText="Normal data file"
      hintText="normal.fastq | normal.bam"
      part="normal"
    />
  </EpiSection>
);

export {EpiNormal, EpiNormalStep};
