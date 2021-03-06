import React, {PropTypes} from "react";

import {Step, StepButton, StepContent} from "material-ui/Stepper";

import EpiSection from "epiwf/util/section";
import {DataFiles} from "../datafiles";
import {EpiPropType} from "epi/proptypes";


const EpiTumorStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Tumor Sample
    </StepButton>
    <StepContent>
      <p>
        We recommend use of data from (at least) 300X whole-exome sequencing
        of the fresh-frozen tumor sample with 125bp reads using a library prep
        based on sonication (and not tagmentation).
      </p>
    </StepContent>
  </Step>
);
EpiTumorStep.propTypes = {
  onClick: PropTypes.func.isRequired,
  key: PropTypes.string.isRquired,
  completed: PropTypes.bool.isRquired
};

const EpiTumor = (props) => (
 <EpiSection title="Sequencing Data From Tumor Tissue Sample">
  <DataFiles
    files={props.workflow.tumor.files}
    floatingLabelText="URL to the tumor data file"
    hintText="e.g. http://url/to/tumor.fastq"
    part="tumor"
  />
 </EpiSection>
);
EpiTumor.propTypes = EpiPropType;

export {EpiTumor, EpiTumorStep};
