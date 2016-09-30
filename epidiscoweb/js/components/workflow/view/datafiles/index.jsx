import React from "react";

import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";

import {Grid, Row, Col} from "react-flexbox-grid/lib";

import style from "./style";


class DataFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri1: props.file.fileUri1,
      fileUri2: props.file.fileUri2,
      fileType: props.file.fileType || "SE"
    };
  }

  render() {
    let {fileUri1, fileUri2, fileType} = this.state;
    let props = this.props;
    let {floatingLabelText} = props;

    const singleFile = () => (
      <TextField
        key="single"
        floatingLabelText={floatingLabelText}
        className={style.datafiletext}
        value={fileUri1}
        fullWidth={true}
        disabled={true}
      />
    );

    const pairedFile = () => (
      <div>
        <TextField
          key="pair1"
          floatingLabelText={`${floatingLabelText} - Pair #1`}
          className={style.datafiletext}
          defaultValue={fileUri1}
          fullWidth={true}
          disabled={true}
        />
        <TextField
          key="pair2"
          floatingLabelText={`${floatingLabelText} - Pair #2`}
          className={style.datafiletext}
          defaultValue={fileUri2}
          fullWidth={true}
          disabled={true}
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
            style={{width: 120, fontSize: 14}}
            disabled={true}
          >
            <MenuItem value={"SE"} primaryText="Single-end" />
            <MenuItem value={"PE"} primaryText="Pair-end" />
          </SelectField>
        </Col>
        <Col xs={9}>
          {fileType === "SE" ? singleFile() : pairedFile()}
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
        floatingLabelText={props.floatingLabelText}
        file={file}
        fileIndex={idx}
      />
    )
  );

  return (
    <Grid fluid>
      {fileViews}
    </Grid>
  );
};

export {DataFiles, DataFile};
