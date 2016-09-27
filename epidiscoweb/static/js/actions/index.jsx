import EpiDispatcher from 'epi/dispatcher';


const EpiActions = {
  workflowUpdated(workflow) {
    EpiDispatcher.dispatch({
      action: "new-workflow",
      workflow
    });
  },
  workflowSubmitted(submitted) {
    EpiDispatcher.dispatch({
      action: "submit-workflow",
      submitted
    });
  },
  stepIndexChanged(stepIndex) {
    EpiDispatcher.dispatch({
      action: "new-step",
      stepIndex
    });
  },
  toolToggled(tool, run) {
    EpiDispatcher.dispatch({
      action: "tool-toggled",
      tool,
      run
    });
  },
  genomeChanged(genome) {
    EpiDispatcher.dispatch({
      action: "genome-changed",
      genome
    });
  },
  bedFileChanged(bedfile) {
    EpiDispatcher.dispatch({
      action: "bedfile-changed",
      bedfile
    });
  },
  hlasChanged(hlas) {
    EpiDispatcher.dispatch({
      action: "hlas-changed",
      hlas
    });
  },
  seq2hlaChanged(run) {
    EpiDispatcher.dispatch({
      action: 'seq2hla-changed',
      run
    });
  },
  emailChanged(email) {
    EpiDispatcher.dispatch({
      action: 'email-changed',
      email
    });
  },
  nameChanged(name) {
    EpiDispatcher.dispatch({
      action: 'name-changed',
      name
    });
  },
  fileAdded(part, file) {
    EpiDispatcher.dispatch({
      action: 'file-added',
      part,
      file
    });
  },
  fileRemoved(part, fileIndex) {
    EpiDispatcher.dispatch({
      action: 'file-removed',
      part,
      fileIndex
    });
  }
};

export default EpiActions;
