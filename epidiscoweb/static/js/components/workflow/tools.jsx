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

const tools = () => (
  <div stye={styles.block}>
    <Toggle
      label="Simple"
      style={styles.toggle}
    />
    <Toggle
      label="Toggled by default"
      defaultToggled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Disabled"
      disabled={true}
      style={styles.toggle}
    />
    <Toggle
      label="Label on the right"
      labelPosition="right"
      style={styles.toggle}
    />
  </div>
);

export default () => (
   <EpiSection
    title="Additional tools"
    children={tools}
   />
);