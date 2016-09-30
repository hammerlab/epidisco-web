import MockWorkflow from "epi/mock-workflow";

const createEmptyWorkflow = (workflowId) => ({
  stepIndex: 0,
  submitted: false,
  description: {
    id: workflowId,
    name: "",
    tags: [],
    hlas: [],
    email: "",
    genome: "b37",
    seq2hla: false,
    regions: ""
  },
  normal: { files: [] },
  tumor: { files: [] },
  rna: { files: [] },
  tools: [
    { name: "MuTect-2", disabled: false, run: false },
    { name: "SomaticSniper", disabled: false, run: true },
    { name: "VarScan", disabled: false, run: false }
  ]
});

const fetchWorkflow = (workflowId, callback) => {
  callback(MockWorkflow);
};

export {createEmptyWorkflow, fetchWorkflow};
