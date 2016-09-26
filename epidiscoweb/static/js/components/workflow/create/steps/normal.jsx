import React from 'react';

import {Step, StepLabel, StepContent} from 'material-ui/Stepper';

import EpiSection from 'epi/components/section';
import {DataFiles} from '../datafiles';

import style from './style';

const EpiNormalStep = (props) => (
  <Step completed={false}>
    <StepLabel className={style.label}>Configure: RNA (Optional)</StepLabel>
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
      files={props.files}
      floatingLabelText="Normal data file"
      hintText="normal.fastq | normal.bam"
    />
  </EpiSection>
);

export {EpiNormal, EpiNormalStep};
