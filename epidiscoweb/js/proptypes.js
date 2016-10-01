import {PropTypes as T} from "react";


const DescriptionPropType = {
  id: T.string.isRequired,
  name: T.string.isRequired,
  tags: T.array,
  hlas: T.array,
  email: T.string.isRequired,
  genome: T.string.isRequired,
  seq2hla: T.bool.isRequired,
  regions: T.string
};

const FilePropType = {
  fileUri1: T.string.isRequred,
  fileUri2: T.string,
  fileType: T.oneOf(["PE", "SE"]).isRequired
};

const SamplePropType = {
  files: T.arrayOf(T.shape(FilePropType)).isRequired
};

const ToolPropType = {
  name: T.string.isRequired,
  disabled: T.bool.isRequired,
  run: T.bool.isRequired
};

const WorkflowPropType = {
  stepIndex: T.number.isRequired,
  submitted: T.bool.isRequired,
  description: T.shape(DescriptionPropType).isRequired,
  normal: T.shape(SamplePropType).isRequired,
  tumor: T.shape(SamplePropType).isRequired,
  rna: T.shape(SamplePropType).isRequired,
  tools: T.arrayOf(T.shape(ToolPropType)).isRequired
};

const EpiPropType = {
  workflow: T.shape(WorkflowPropType).isRequired
};

export {
  DescriptionPropType,
  FilePropType,
  SamplePropType,
  ToolPropType,
  WorkflowPropType,
  EpiPropType
};
