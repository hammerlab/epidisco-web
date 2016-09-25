import EventEmitter from 'events';

import EpiDispatcher from '../dispatcher';

const CHANGE_EVENT = 'change';
const EmptyWorkFlow = {
  stepIndex: 0,
  description: { id: "", name: "", tags: [], hlas: [], email: "" },
  normal: { files: [] },
  tumor: { files: [] },
  rna: { files: [] },
  tools: []
};

class EpiStore extends EventEmitter {
  constructor() {
    super();
    this.workflow = EmptyWorkFlow;
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
    };
  }
);

export {epiStore as EpiStore, EmptyWorkFlow};