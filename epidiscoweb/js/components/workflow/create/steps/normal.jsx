import React, {PropTypes} from "react";

import {Step, StepButton, StepContent} from "material-ui/Stepper";

import EpiSection from "epiwf/util/section";
import {DataFiles} from "../datafiles";
import {EpiPropType} from "epi/proptypes";


const EpiNormalStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Normal Sample
    </StepButton>
    <StepContent>
      <p>
        We recommend use of data from (at least) 150X whole-exome sequencing
        of the fresh-frozen normal sample with 125bp reads using a library prep
        based on sonication (and not tagmentation).
      </p>
    </StepContent>
  </Step>
);
EpiNormalStep.propTypes = {
  onClick: PropTypes.func.isRequired,
  key: PropTypes.string.isRquired,
  completed: PropTypes.bool.isRquired
};

const EpiNormal = (props) => (
  <EpiSection title="Sequencing Data From Normal Tissue Sample">
    <DataFiles
      files={props.workflow.normal.files}
      floatingLabelText="URL to the normal data file"
      hintText="e.g. http://url/to/normal.fastq"
      part="normal"
    />
  </EpiSection>
);
EpiNormal.propTypes = EpiPropType;

export {EpiNormal, EpiNormalStep};
