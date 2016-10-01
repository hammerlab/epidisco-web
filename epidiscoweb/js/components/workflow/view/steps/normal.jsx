import React from "react";

import EpiSection from "epiwf/util/section";
import {DataFiles} from "../datafiles";
import {EpiPropType} from "epi/proptypes";


const EpiNormal = (props) => (
  <EpiSection title="Sequencing Data From Normal Tissue Sample">
    <DataFiles
      files={props.workflow.normal.files}
      floatingLabelText="URL to the normal data file"
    />
  </EpiSection>
);
EpiNormal.propTypes = EpiPropType;

export default EpiNormal;
