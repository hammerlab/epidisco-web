import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiTumorStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Tumor Sample
    </StepButton>
    <StepContent>
      <p>
        We recommend use of data from (at least) 300X whole-exome sequencing
        of the fresh-frozen tumor sample with 125bp reads using a library prep
        based on sonication (and not tagmentation).
      </p>
    </StepContent>
  </Step>
);

const EpiTumor = (props) => (
 <EpiSection title="Tumor Sequencing Files">
  <DataFiles
    files={props.workflow.tumor.files}
    floatingLabelText="Tumor data file"
    hintText="tumor.fastq | tumor.bam"
    part="tumor"
  />
 </EpiSection>
);

export {EpiTumor, EpiTumorStep};
