import React from 'react';

import Chip from 'material-ui/Chip';

import EpiSection from '../section';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

export default () => (
    <EpiSection title="Workflow details">
      <div style={styles.wrapper}>
        <Chip key="2" style={styles.chip} >Project: PGV</Chip>
        <Chip key="3" style={styles.chip}>Sample: Patient 42</Chip>
        <Chip key="4" style={styles.chip}>Genome: hg19</Chip>
      </div>
    </EpiSection>
);
