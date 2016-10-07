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
  let url = `/workflows/${workflowId}/`;
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let workflow = JSON.parse(JSON.parse(xmlHttp.response));
      callback(workflow);
    }
  };
  xmlHttp.open("GET", url, true);
  xmlHttp.send();
};

export {createEmptyWorkflow, fetchWorkflow};
