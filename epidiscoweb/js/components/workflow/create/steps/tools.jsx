import React, {PropTypes} from "react";

import Toggle from "material-ui/Toggle";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import {Step, StepButton, StepContent} from "material-ui/Stepper";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";

import EpiSection from "epiwf/util/section";
import EpiActions from "epi/actions";
import {EpiPropType} from "epi/proptypes";

import {Row, Col} from "react-flexbox-grid/lib";

import style from "./style";


const EpiToolsStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Configure: Additional parameters
    </StepButton>
    <StepContent>
      <p>
        Our pipeline, by default, utilizes
        GATK, MuTect and Strelka for variant calling
        against the b37 genome contig;
        but you can optionally get results from other callers
        and filter variants for particular genomic regions.

        If you have provided RNA data,
        our pipeline can infer MHC alleles via seq2HLA;
        but you can always override this by providing
        your own MHC Alleles as a list.
      </p>
    </StepContent>
  </Step>
);
EpiToolsStep.propTypes = {
  onClick: PropTypes.func.isRequired,
  key: PropTypes.string.isRquired,
  completed: PropTypes.bool.isRquired
};

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
                defaultValue={props.workflow.description.hlas.join("\n")}
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
              defaultValue={props.workflow.description.regions}
              fullWidth={true}
            />
           </ListItem>
         </List>
       </Col>
     </Row>
   </EpiSection>
  );
};
EpiTools.propTypes = EpiPropType;

export {EpiTools, EpiToolsStep};
