import React from 'react';

import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Step, StepButton, StepContent} from 'material-ui/Stepper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import EpiSection from '../section';
import EpiActions from 'epi/actions';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import style from './style';


const EpiToolsStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Additional parameters
    </StepButton>
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
  const variantCallers = props.workflow.tools.map(
    (tool) => {
      let toggle = (
        <Toggle
          toggled={tool.run}
          disabled={tool.disabled}
          onToggle={() => {
            EpiActions.toolToggled(tool, !tool.run);
          }}
        />
      );

      return (
        <ListItem
          key={tool.name}
          primaryText={tool.name}
          rightToggle={toggle}
        />
      );
    }
  );

  return (
   <EpiSection title="Additional parameters">
     <Row>
       <Col xs={6}>
         <List className={style.toolscol}>
           <Subheader>Additional variant callers</Subheader>
           {variantCallers}
           <Divider />
           <Subheader>Reference Genome</Subheader>
           <ListItem>
             <SelectField
                onChange={(e, k, v) => EpiActions.genomeChanged(v)}
                value={props.workflow.description.genome || "b37"}
              >
                {["b37", "b38", "hg18", "hg19"].map(
                  (g) => (
                    <MenuItem
                      key={g}
                      value={g}
                      primaryText={`Human: ${g}`}
                    />
                  )
                )}
                <MenuItem
                  key="mm10"
                  value="mm10"
                  primaryText="Mouse: mm10"
                  disabled={true}
                />
              </SelectField>
           </ListItem>
         </List>
       </Col>
       <Col xs={6}>
         <List className={style.toolscol}>
           <Subheader>Neoepitope prediction</Subheader>
             <ListItem>
              <TextField
                hintText={"HLA-A*01:01\nHLA-A*02:01"}
                floatingLabelText="MHC Alleles (one per line)"
                multiLine={true}
                fullWidth={true}
                rows={2}
                rowsMax={10}
                onChange={(e, v) => EpiActions.hlasChanged(v)}
                value={props.workflow.description.hlas.join("\n")}
              />
           </ListItem>
           <ListItem
             primaryText="or use seq2HLA"
             rightToggle={
               <Toggle
                 key="seq2HLA"
                 toggled={props.workflow.description.seq2hla}
                 onToggle={() => {
                   let run = !props.workflow.description.seq2hla;
                   EpiActions.seq2hlaChanged(run);
                 }}
               />
             }
           />
           <Divider />
           <Subheader>Regions of interest</Subheader>
           <ListItem>
            <TextField
              onChange={(e, v) => EpiActions.bedFileChanged(v)}
              hintText="regions.bed"
              floatingLabelText="BED file URL"
              value={props.workflow.description.regions}
              fullWidth={true}
            />
           </ListItem>
         </List>
       </Col>
     </Row>
   </EpiSection>
  );
};

export {EpiTools, EpiToolsStep};
