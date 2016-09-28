import uuid from 'uuid';

/* Kick-start */
const MockWorkflow = {
  stepIndex: 2,
  submitted: false,
  description: {
    id: uuid.v1(),
    name: "Epidisco-web test workflow",
    hlas: ["HLA-A*01:01", "HLA-A*02:01"],
    seq2hla: false,
    genome: "b37",
    regions: 'https://hammerlab.org/regions.bed',
    email: "arman@hammerlab.org"
  },
  normal: {
    files: [
      { fileUri1: 'https://hammerlab.org/normal1.bam', fileType: 'SE' },
      { fileUri1: 'https://hammerlab.org/normal2.bam', fileType: 'SE' }
    ]
  },
  tumor: {
    files: [
      { fileUri1: 'https://hammerlab.org/tumor1.bam', fileType: 'SE' },
      { fileUri1: 'https://hammerlab.org/tumor2.bam', fileType: 'SE' },
      { fileUri1: 'https://hammerlab.org/tumor3.bam', fileType: 'SE' }
    ]
  },
  rna: {
    files: [
      {
        fileUri1: 'https://hammerlab.org/rna1.bam',
        fileUri2: 'https://hammerlab.org/rna2.bam',
        fileType: 'PE'
      }
    ]
  },
  tools: [
    { name: "MuTect-2", disabled: false, run: false },
    { name: "SomaticSniper", disabled: false, run: true },
    { name: "VarScan", disabled: false, run: false }
  ]
};
/* end of kick-start */

export default MockWorkflow;
