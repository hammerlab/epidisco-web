import React from 'react';

import Toggle from 'material-ui/Toggle';
import EpiSection from '../section';

import workflow from './style';


export default (props) => {
  const toggles = props.tools.map(
    (tool) => (
      <Toggle
        key={tool.name}
        label={tool.name}
        className={workflow.toggle}
        toggled={tool.run}
        disabled={tool.disabled}
        labelPosition="right"
      />
    )
  );

  return (
   <EpiSection title="Additional tools">
    <div className={workflow.block}>
      {toggles}
    </div>
   </EpiSection>
  );
};