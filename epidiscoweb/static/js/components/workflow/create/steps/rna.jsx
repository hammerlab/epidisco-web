import React from 'react';

import {Step, StepButton, StepContent} from 'material-ui/Stepper';

import EpiSection from '../section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiRNAStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Tumor RNA (Optional)
    </StepButton>
    <StepContent>
      <p>
        We recommend use of RNA-Seq data
        with at least 100M reads.
        Sample preparation featuring poly-A capture is preferred
        over ribosomal depletion.
      </p>
    </StepContent>
  </Step>
);

const EpiRNA = (props) => (
 <EpiSection title="RNA Sequencing Data From Tissue Sample">
  <DataFiles
    files={props.workflow.rna.files}
    floatingLabelText="URL to the tumor RNA data file"
    hintText="e.g. http://url/to/rna.fastq"
    part="rna"
  />
 </EpiSection>
);

export {EpiRNA, EpiRNAStep};
