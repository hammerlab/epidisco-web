import EpiDispatcher from 'epi/dispatcher';

const EpiActions = {
  workflowUpdated(workflow) {
    EpiDispatcher.dispatch({
      action: "new-workflow",
      workflow
    });
  },
  stepIndexChanged(stepIndex) {
    EpiDispatcher.dispatch({
      action: "new-step",
      stepIndex
    });
  }
};

export default EpiActions;
