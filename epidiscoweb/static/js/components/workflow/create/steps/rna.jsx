import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiRNAStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: RNA (Optional)
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

const EpiRNA = (props) => (
 <EpiSection title="RNA Sequencing Files">
  <DataFiles
    files={props.workflow.rna.files}
    floatingLabelText="RNA data file"
    hintText="rna.fastq | rna.bam"
    part="rna"
  />
 </EpiSection>
);

export {EpiRNA, EpiRNAStep};
