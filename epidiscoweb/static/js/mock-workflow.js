import uuid from 'uuid';

/* Kick-start */
const MockWorkflow = {
  stepIndex: 2,
  submitted: false,
  description: {
    id: uuid.v1(),
    name: "Epidisco-web test workflow",
    tags: [ "Patient #42", "Genome: hg19", "PGV" ],
    hlas: ["HLA-A*01:01"],
    seq2hla: false,
    genome: "b37",
    email: "arman@hammerlab.org"
  },
  normal: {
    files: [
      { uri: 'https://hammerlab.org/normal1.bam', filetype: 'SE' },
      { uri: 'https://hammerlab.org/normal2.bam', filetype: 'SE' }
    ]
  },
  tumor: {
    files: [
      { uri: 'https://hammerlab.org/tumor1.bam', filetype: 'SE' },
      { uri: 'https://hammerlab.org/tumor2.bam', filetype: 'SE' }
    ]
  },
  rna: {
    files: []
  },
  tools: [
    { name: "MuTect-2", disabled: false, run: false },
    { name: "SomaticSniper", disabled: false, run: true },
    { name: "VarScan", disabled: false, run: false }
  ]
};
/* end of kick-start */

export default MockWorkflow;
