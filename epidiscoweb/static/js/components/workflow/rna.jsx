import React from 'react';

import EpiSection from '../section';
import {DataFiles} from './datafiles'

export default (props) => (
   <EpiSection title="RNA Sequencing Files">
    <DataFiles
      files={props.rna}
      floatingLabelText="RNA data file"
      hintText="rna.fastq | rna.bam"
    />
   </EpiSection>
);
