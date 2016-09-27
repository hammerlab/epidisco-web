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

class DataFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri1: props.file.fileUri1,
      fileUri2: props.file.fileUri1,
      fileType: props.file.fileType || 'SE'
    }
  }

  render() {
    let {fileUri1, fileUri2, fileType} = this.state;
    let props = this.props;
    let {part, fileIndex, removable, floatingLabelText} = props;
    let buttonAction, ButtonIcon, disabled, secondary;

    if(removable) {
      buttonAction = (e) => EpiActions.fileRemoved(part, fileIndex);
      ButtonIcon = ContentRemove;
      disabled = true;
      secondary = true;
    } else {
      buttonAction = (e) => {
        EpiActions.fileAdded(part, this.state);
      };
      ButtonIcon = ContentAdd;
      disabled = false;
      secondary = false;
    }

    const singleFile = () => (
      <TextField
        key="single"
        hintText={props.hintText}
        floatingLabelText={floatingLabelText}
        className={style.datafiletext}
        defaultValue={fileUri1}
        fullWidth={true}
        disabled={disabled}
        onChange={(e, v) => this.setState({fileUri1: v})}
      />
    );

    const pairedFile = () => (
      <div>
        <TextField
          key="pair1"
          hintText={props.hintText}
          floatingLabelText={`${floatingLabelText} - Pair #1`}
          className={style.datafiletext}
          defaultValue={fileUri1}
          fullWidth={true}
          disabled={disabled}
          onChange={(e, v) => this.setState({fileUri1: v})}
        />
        <TextField
          key="pair2"
          hintText={props.hintText}
          floatingLabelText={`${floatingLabelText} - Pair #2`}
          className={style.datafiletext}
          defaultValue={fileUri2}
          fullWidth={true}
          disabled={disabled}
          onChange={(e, v) => this.setState({fileUri2: v})}
        />
      </div>
    );

    return (
      <Row middle="xs">
        <Col xs={3}>
          <SelectField
            value={fileType}
            className={style.datafiletype}
            floatingLabelText="Sequence type"
            style={{width: 120}}
            disabled={disabled}
            onChange={(e, k, v) => this.setState({fileType: v})}
          >
            <MenuItem value={"SE"} primaryText="Single" />
            <MenuItem value={"PE"} primaryText="Paired" />
          </SelectField>
        </Col>
        <Col xs={8}>
          {fileType === "SE" ? singleFile() : pairedFile()}
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
    );
  }
}

const DataFiles = (props) => {
  const files = props.files || [];
  const fileViews = files.map(
    (file, idx) => (
      <DataFile
        key={idx}
        removable={true}
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
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
        file={{fileType: 'SE', fileUri1: '', fileUri2: ''}}
        hintText={props.hintText}
        floatingLabelText={props.floatingLabelText}
        part={props.part}
        removable={false}
      />
    </Grid>
  );
};

export {DataFiles, DataFile, Spacer};
