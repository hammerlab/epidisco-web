import React from 'react';

import Toggle from 'material-ui/Toggle';
import {Step, StepLabel, StepContent} from 'material-ui/Stepper';

import EpiSection from 'epi/components/section';

import style from './style';


const EpiToolsStep = (props) => (
  <Step>
    <StepLabel className={style.label}>Configure: Additional tools</StepLabel>
    <StepContent>
      <p>
        Nullam odio metus, tincidunt a volutpat id, tristique ac felis.
        Fusce imperdiet fermentum diam ac maximus.
        Pellentesque vulputate ligula at sem fringilla euismod.
      </p>
    </StepContent>
  </Step>
);

const EpiTools = (props) => {
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

export {EpiTools, EpiToolsStep};
