import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import EpiActions from 'epi/actions';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import style from './style';

const Spacer = () => (
  <Row>
    <Col xs={12}>
      <br />
      <br />
    </Col>
  </Row>
);

const DataFile = (props) => {
  let {part, fileIndex, file} = props;
  let buttonAction
  let ButtonIcon;

  if(props.removable) {
    buttonAction = (e) => EpiActions.fileRemoved(part, fileIndex);
    ButtonIcon = ContentRemove;
  } else {
    buttonAction = (e) => { EpiActions.fileAdded(part, file); }
    ButtonIcon = ContentAdd;
  }

  return (
    <Row bottom="xs" >
      <Col xs={3}>
        <SelectField
          value={file.filetype || "SE"}
          className={style.datafiletype}
          floatingLabelText="Sequence type"
          style={{width: 120}}
          onChange={(e, k, v) => {file.filetype = v;}}
        >
          <MenuItem value={"SE"} primaryText="Single" />
          <MenuItem value={"PE"} primaryText="Paired" />
        </SelectField>
      </Col>
      <Col xs={8}>
        <TextField
          hintText={props.hintText}
          floatingLabelText={props.floatingLabelText}
          className={style.datafiletext}
          defaultValue={file.uri}
          fullWidth={true}
          onChange={(e, v) => {file.uri = v;}}
        />
      </Col>
      <Col xs={1}>
        <FloatingActionButton mini={true} onTouchTap={buttonAction}>
          <ButtonIcon />
        </FloatingActionButton>
      </Col>
    </Row>
)};

const DataFiles = (props) => {
  const files = props.files || [];
  const fileViews = files.map(
    (file, idx) => (
      <DataFile
        removable={true}
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
        key={file.uri}
        file={file}
        fileIndex={idx}
        part={props.part}
      />
    )
  );

  return (
    <Grid fluid>
      {fileViews}
      <DataFile
        file={{filetype: 'SE', uri: ''}}
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
        part={props.part}
      />
    </Grid>
  );
};

export {DataFiles, DataFile, Spacer};
