import React from 'react';

import {Step, StepLabel, StepContent} from 'material-ui/Stepper';

import EpiSection from 'epi/components/section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiTumorStep = (props) => (
  <Step>
    <StepLabel className={style.label}>Configure: Tumor</StepLabel>
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
    files={props.files}
    floatingLabelText="Tumor data file"
    hintText="tumor.fastq | tumor.bam"
  />
 </EpiSection>
);

export {EpiTumor, EpiTumorStep};
