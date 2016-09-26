import React from 'react';

import Toggle from 'material-ui/Toggle';
import EpiSection from 'epi/components/section';

import style from './style';


export default (props) => {
  const toggles = props.tools.map(
    (tool) => (
      <Toggle
        key={tool.name}
        label={tool.name}
        className={style.toggle}
        toggled={tool.run}
        disabled={tool.disabled}
        labelPosition="right"
      />
    )
  );

  return (
   <EpiSection title="Additional tools">
    <div className={style.block}>
      {toggles}
    </div>
   </EpiSection>
  );
};
