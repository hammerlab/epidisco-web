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
    };
  }
);

export default epiStore;
