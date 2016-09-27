import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiTumorStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Tumor
    </StepButton>
    <StepContent>
      <p>
        Praesent sem risus, fermentum et euismod sed, sollicitudin a dolor.
        Sed non pulvinar nisi, ut mattis lectus.
        Duis in tincidunt mi.
        In finibus suscipit volutpat.
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
  />
 </EpiSection>
);

export {EpiTumor, EpiTumorStep};
