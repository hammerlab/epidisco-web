import React from 'react';

import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import EpiSection from 'epiwf/util/section';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import style from './style';


const EpiTools = (props) => {
  const variantCallers = props.workflow.tools.map(
    (tool) => {
      return (
        <ListItem
          key={tool.name}
          primaryText={tool.name}
          rightToggle={<Toggle toggled={tool.run} />}
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
               disabled={true}
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
                floatingLabelText="MHC Alleles (one per line)"
                multiLine={true}
                disabled={true}
                fullWidth={true}
                rows={2}
                rowsMax={10}
                value={props.workflow.description.hlas.join("\n")}
              />
           </ListItem>
           <ListItem
             primaryText="or use seq2HLA"
             rightToggle={
               <Toggle
                 key="seq2HLA"
                 disabled={true}
                 toggled={props.workflow.description.seq2hla}
               />
             }
           />
           <Divider />
           <Subheader>Regions of interest</Subheader>
           <ListItem>
            <TextField
              disabled={true}
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

export default EpiTools;
