import React from 'react';

import EpiSection from 'epi/components/section';
import {DataFiles} from './datafiles';


export default (props) => (
 <EpiSection title="Tumor Sequencing Files">
  <DataFiles
    files={props.files}
    floatingLabelText="Tumor data file"
    hintText="tumor.fastq | tumor.bam"
  />
 </EpiSection>
);
