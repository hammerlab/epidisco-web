import EpiStepper from './stepper';
import MockWorkflow from 'epi/mock-workflow';

const createEmptyWorkflow = (workflowId) => ({
  stepIndex: 0,
  description: { id: workflowId, name: "", tags: [], hlas: [], email: "" },
  normal: { files: [] },
  tumor: { files: [] },
  rna: { files: [] },
  tools: []
});

const fetchWorkflow = (workflowId, callback) => {
  callback(MockWorkflow);
};

export {EpiStepper, createEmptyWorkflow, fetchWorkflow};
