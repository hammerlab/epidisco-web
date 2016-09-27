import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from 'epi/components/section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiRNAStep = (props) => (
  <Step>
    <StepButton>Configure: RNA (Optional)</StepButton>
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
    files={props.rna}
    floatingLabelText="RNA data file"
    hintText="rna.fastq | rna.bam"
  />
 </EpiSection>
);

export {EpiRNA, EpiRNAStep};
