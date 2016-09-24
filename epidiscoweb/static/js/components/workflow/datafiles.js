import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import workflow from './style';

const Spacer = () => (
  <Row>
    <Col xs={12}>
      <br />
      <br />
    </Col>
  </Row>
);

const DataFile = (props) => (
  <Row bottom="xs" >
    <Col xs={3}>
      <SelectField
        value={props.dataFileType || "SE"}
        className={workflow.datafiletype}
        autoWidth={true}
      >
        <MenuItem value={"SE"} primaryText="SE" />
        <MenuItem value={"PE"} primaryText="PE" />
      </SelectField>
    </Col>
    <Col xs={8}>
      <TextField 
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
        className={workflow.datafiletext}
        defaultValue={props.dataFileURI}
        fullWidth={true}
      />
    </Col>
    <Col xs={1}>
      <FloatingActionButton mini={true}>
        {props.dataFileURI && props.dataFileURI.length > 0 
          ? <ContentRemove /> 
          : <ContentAdd />}
      </FloatingActionButton>
    </Col>
  </Row>
);

const DataFiles = (props) => {
  const files = props.files || [];
  const fileViews = files.map(
    (file) => (
      <DataFile
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
        key={file.uri}
        dataFileURI={file.uri}
        dataFileType={file.filetype}
      />
    )
  );

  return (
    <Grid fluid>
      {fileViews}
      <DataFile
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
      />
    </Grid>
  );
};

export {DataFiles, DataFile, Spacer};