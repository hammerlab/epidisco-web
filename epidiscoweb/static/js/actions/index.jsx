import EpiDispatcher from 'epi/dispatcher';

const dispatch = (msg) => EpiDispatcher.dispatch(msg);
const timers = {};
const pool = (msg, wait = 1000) => {
  let {setTimeout, clearTimeout} = window;
  let {action} = msg;
  let timerId = timers[action];
  if(timerId) {
    clearTimeout(timerId)
  }
  timerId = setTimeout(() => dispatch(msg), wait);
  timers[action] = timerId;
};

const EpiActions = {
  workflowUpdated(workflow) {
    dispatch({
      action: "new-workflow",
      workflow
    });
  },
  workflowSubmitted(submitted) {
    dispatch({
      action: "submit-workflow",
      submitted
    });
  },
  stepIndexChanged(stepIndex) {
    dispatch({
      action: "new-step",
      stepIndex
    });
  },
  toolToggled(tool, run) {
    dispatch({
      action: "tool-toggled",
      tool,
      run
    });
  },
  genomeChanged(genome) {
    dispatch({
      action: "genome-changed",
      genome
    });
  },
  bedFileChanged(bedfile) {
    pool({
      action: "bedfile-changed",
      bedfile
    });
  },
  hlasChanged(hlas) {
    pool({
      action: "hlas-changed",
      hlas
    });
  },
  seq2hlaChanged(run) {
    pool({
      action: 'seq2hla-changed',
      run
    });
  },
  emailChanged(email) {
    pool({
      action: 'email-changed',
      email
    });
  },
  nameChanged(name) {
    pool({
      action: 'name-changed',
      name
    });
  },
  fileAdded(part, file) {
    dispatch({
      action: 'file-added',
      part,
      file
    });
  },
  fileRemoved(part, fileIndex) {
    dispatch({
      action: 'file-removed',
      part,
      fileIndex
    });
  }
};

export default EpiActions;
