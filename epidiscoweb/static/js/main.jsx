import React from 'react';
import ReactDOM from 'react-dom';

import uuid from 'uuid';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EpiHome from './components/home';

const mock = {
  description: {
    id: uuid.v1(),
    name: "Epidisco-web test workflow",
    tags: [ "Patient #42", "Genome: hg19", "PGV" ],
    hlas: [],
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
    { name: "seq2HLA", disabled: false, run: true },
    { name: "SomaticSniper", disabled: false, run: true },
    { name: "VarScan", disabled: false, run: false }
  ]
};

ReactDOM.render(
  <MuiThemeProvider>
    <EpiHome
      description={mock.description}
      normal={mock.normal}
      tumor={mock.tumor}
      rna={mock.rna}
      tools={mock.tools}
    />
  </MuiThemeProvider>,
  document.getElementById('epidiscoweb')
);