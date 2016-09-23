import React from 'react';

import EpiSection from '../section';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';



export default () => (
   <EpiSection title="Tumor Sequencing Files">
         <Grid fluid>
        <Row bottom="xs" >
          <Col xs={2}>
            <SelectField value={2} style={{width: '100px'}}>
              <MenuItem value={1} primaryText="SE" />
              <MenuItem value={2} primaryText="PE" />
            </SelectField>
          </Col>
          <Col xs={9}>
            <TextField 
              hintText="tumor.fastq or tumor.bam"
              floatingLabelText="Tumor sample data"
              style={{width: '100%'}}
              defaultValue="http://example.com/tumor.r1.fastq.gz"
            />
          </Col>
          <Col xs={1}>
            <FloatingActionButton disabled={true} mini={true}>
              <ContentRemove />
            </FloatingActionButton>
          </Col>
        </Row>
        <Row bottom="xs" >
          <Col xs={2}>
            <SelectField value={2} style={{width: '100px'}}>
              <MenuItem value={1} primaryText="SE" />
              <MenuItem value={2} primaryText="PE" />
            </SelectField>
          </Col>
          <Col xs={9}>
            <TextField 
              hintText="tumor.fastq or tumor.bam"
              floatingLabelText="Tumor sample data"
              style={{width: '100%'}}
              defaultValue="http://example.com/tumor.r2.fastq.gz"
            />
          </Col>
          <Col xs={1}>
            <FloatingActionButton disabled={true} mini={true}>
              <ContentRemove />
            </FloatingActionButton>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <br />
            <br />
          </Col>
        </Row>
        <Row end="xs" middle="xs">
          <Col xs={4} end="xs">
            <small><b>Add a new data file</b></small>
          </Col>
          <Col xs={1}>
            <FloatingActionButton secondary={true} mini={true}>
              <ContentAdd />
            </FloatingActionButton>
          </Col>
        </Row>
      </Grid>

   </EpiSection>
);