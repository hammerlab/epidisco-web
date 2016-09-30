import React from "react";

import EpiSection from "epiwf/util/section";
import {DataFiles} from "../datafiles";


const EpiTumor = (props) => (
 <EpiSection title="Sequencing Data From Tumor Tissue Sample">
  <DataFiles
    files={props.workflow.tumor.files}
    floatingLabelText="URL to the tumor data file"
  />
 </EpiSection>
);

export default EpiTumor;
