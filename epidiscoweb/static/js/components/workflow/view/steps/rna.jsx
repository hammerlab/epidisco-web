import React from 'react';

import EpiSection from 'epiwf/util/section';
import {DataFiles} from '../datafiles';

import style from './style';


const EpiRNA = (props) => (
 <EpiSection title="RNA Sequencing Data From Tissue Sample">
  <DataFiles
    files={props.workflow.rna.files}
    floatingLabelText="URL to the tumor RNA data file"
  />
 </EpiSection>
);

export default EpiRNA;
