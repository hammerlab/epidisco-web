import React from 'react';

import EpiSection from '../section';
import {DataFiles} from './datafiles'

export default (props) => (
    <EpiSection title="Normal Sequencing Files">
      <DataFiles
        files={props.files}
        floatingLabelText="Normal data file"
        hintText="normal.fastq | normal.bam"
      />
    </EpiSection>
);
