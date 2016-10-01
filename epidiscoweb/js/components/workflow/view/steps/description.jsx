import React from "react";

import {Grid, Row, Col} from "react-flexbox-grid/lib";
import TextField from "material-ui/TextField";

import EpiSection from "epiwf/util/section";
import {EpiPropType} from "epi/proptypes";


const EpiDescription = (props) => {
  const desc = props.workflow.description;

  return (
    <EpiSection title="Workflow details">
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <TextField
              floatingLabelText="Descriptive Name"
              value={desc.name}
              disabled={true}
              fullWidth={true}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextField
              floatingLabelText="E-mail address"
              value={desc.email}
              disabled={true}
              fullWidth={true}
            />
          </Col>
        </Row>
      </Grid>
    </EpiSection>
  );
};
EpiDescription.propTypes = EpiPropType;

export default EpiDescription;
