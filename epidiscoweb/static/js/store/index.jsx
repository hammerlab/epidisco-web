import EventEmitter from 'events';

import EpiDispatcher from 'epi/dispatcher';
import {createEmptyWorkflow} from 'epiwf/util';

const CHANGE_EVENT = 'change';

class EpiStore extends EventEmitter {
  constructor() {
    super();
    this.workflow = createEmptyWorkflow();
  }

  getWorkflowState() {
    return { "workflow": this.workflow };
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const epiStore = new EpiStore();
epiStore.dispatchToken = EpiDispatcher.register(
  (update) => {
    switch(update.action) {
      case 'new-normal-file':
        epiStore.workflow.normal.files.push(update.newFile);
        epiStore.emitChange();
        break;
      case 'new-workflow':
        epiStore.workflow = update.workflow;
        epiStore.emitChange();
        break;
      case 'new-step':
        epiStore.workflow.stepIndex = update.stepIndex;
        epiStore.emitChange();
        break;
      case 'submit-workflow':
        epiStore.workflow.submitted = update.submitted;
        epiStore.emitChange();
        break;
      case 'tool-toggled':
        epiStore.workflow.tools.forEach((tool, index) => {
          if(tool.name === update.tool.name) {
            epiStore.workflow.tools[index].run = update.run;
          }
        });
        epiStore.emitChange();
        break;
      case 'genome-changed':
        epiStore.workflow.description.genome = update.genome;
        epiStore.emitChange();
        break;
      case 'bedfile-changed':
        epiStore.workflow.description.regions = update.bedfile;
        epiStore.emitChange();
        break;
      case 'hlas-changed':
        let newHlas = update.hlas.split('\n');
        epiStore.workflow.description.hlas = newHlas;
        epiStore.emitChange();
        break;
      case 'seq2hla-changed':
        epiStore.workflow.description.seq2hla = update.run;
        epiStore.emitChange();
        break;
      case 'name-changed':
        epiStore.workflow.description.name = update.name;
        epiStore.emitChange();
        break;
      case 'email-changed':
        epiStore.workflow.description.email = update.email;
        epiStore.emitChange();
        break;
      case 'file-added':
        epiStore.workflow[update.part].files.push(update.file);
        epiStore.emitChange();
        break;
      case 'file-removed':
        epiStore.workflow[update.part].files.splice(update.fileIndex, 1);
        epiStore.emitChange();
        break;
    };
  }
);

export default epiStore;
