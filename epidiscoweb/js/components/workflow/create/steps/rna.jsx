import React, {PropTypes} from "react";

import {Step, StepButton, StepContent} from "material-ui/Stepper";

import EpiSection from "epiwf/util/section";
import {DataFiles} from "../datafiles";
import {EpiPropType} from "epi/proptypes";


const EpiRNAStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Tumor RNA (Optional)
    </StepButton>
    <StepContent>
      <p>
        We recommend use of RNA-Seq data
        with at least 100M reads.
        Sample preparation featuring poly-A capture is preferred
        over ribosomal depletion.
      </p>
    </StepContent>
  </Step>
);
EpiRNAStep.propTypes = {
  onClick: PropTypes.func.isRequired,
  key: PropTypes.string.isRquired,
  completed: PropTypes.bool.isRquired
};

const EpiRNA = (props) => (
 <EpiSection title="RNA Sequencing Data From Tissue Sample">
  <DataFiles
    files={props.workflow.rna.files}
    floatingLabelText="URL to the tumor RNA data file"
    hintText="e.g. http://url/to/rna.fastq"
    part="rna"
  />
 </EpiSection>
);
EpiRNA.propTypes = EpiPropType;

export {EpiRNA, EpiRNAStep};
