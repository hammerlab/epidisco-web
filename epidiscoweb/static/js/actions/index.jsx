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
  },
  workflowSubmitted(submitted) {
    EpiDispatcher.dispatch({
      action: "submit-workflow",
      submitted
    });
  }
};

export default EpiActions;
