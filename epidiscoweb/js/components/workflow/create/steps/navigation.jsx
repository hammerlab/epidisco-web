import React from "react";

import {Row, Col} from "react-flexbox-grid/lib";

import RaisedButton from "material-ui/RaisedButton";
import ChevronRight from "material-ui/svg-icons/navigation/chevron-right";
import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";

import EpiActions from "epi/actions";


const EpiNavigation = ({stepIndex, numberOfSteps}) => {
  let prevStep = (si) => (() => EpiActions.stepIndexChanged(si - 1));
  let nextStep = (si) => (() => EpiActions.stepIndexChanged(si + 1));

  return (
    <Row center="xs" around="xs">
      <Col xs={4}>
        <RaisedButton
          label="Back"
          disabled={stepIndex === 0}
          onTouchTap={prevStep(stepIndex)}
          icon={<ChevronLeft />}
          fullWidth={true}
        />
      </Col>
      <Col xs={4}>
        <RaisedButton
          label="Next"
          primary={true}
          disabled={stepIndex === (numberOfSteps - 1)}
          onTouchTap={nextStep(stepIndex)}
          icon={<ChevronRight />}
          labelPosition="before"
          fullWidth={true}
        />
      </Col>
    </Row>
  );
};

export default EpiNavigation;
