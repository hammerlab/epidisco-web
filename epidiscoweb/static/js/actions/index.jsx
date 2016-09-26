import EpiDispatcher from 'epi/dispatcher';

const EpiActions = {
  workflowUpdated(workflow) {
    EpiDispatcher.dispatch({
      action: "new-workflow",
      workflow
    });
  }
};

export default EpiActions;
