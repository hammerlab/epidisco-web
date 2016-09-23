import React from 'react';

import Toggle from 'material-ui/Toggle';
import EpiSection from '../section';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
};

export default () => (
   <EpiSection title="Additional tools">
    <div style={styles.block}>
      <Toggle
        label="MuTect-2"
        style={styles.toggle}
        labelPosition="right"
      />
      <Toggle
        label="seq2HLA"
        style={styles.toggle}
        labelPosition="right"
      />
      <Toggle
        label="SomaticSniper"
        style={styles.toggle}
        defaultToggled={true}
        labelPosition="right"
      />
      <Toggle
        label="VarScan"
        style={styles.toggle}
        labelPosition="right"
      />
    </div>
   </EpiSection>
);