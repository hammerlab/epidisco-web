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
  let {part, fileIndex, file, removable} = props;
  let buttonAction, ButtonIcon, disabled, secondary;

  if(removable) {
    buttonAction = (e) => EpiActions.fileRemoved(part, fileIndex);
    ButtonIcon = ContentRemove;
    disabled = true;
    secondary = true;
  } else {
    buttonAction = (e) => { EpiActions.fileAdded(part, file); };
    ButtonIcon = ContentAdd;
    disabled = false;
    secondary = false;
  }

  return (
    <Row bottom="xs" >
      <Col xs={3}>
        <SelectField
          value={file.filetype || "SE"}
          className={style.datafiletype}
          floatingLabelText="Sequence type"
          style={{width: 120}}
          disabled={disabled}
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
          disabled={disabled}
          onChange={(e, v) => {file.uri = v;}}
        />
      </Col>
      <Col xs={1}>
        <FloatingActionButton
          mini={true}
          onTouchTap={buttonAction}
          secondary={secondary}
        >
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
        key="newfile"
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
        removable={false}
      />
    </Grid>
  );
};

export {DataFiles, DataFile, Spacer};
