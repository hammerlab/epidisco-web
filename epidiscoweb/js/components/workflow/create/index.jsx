import React, {PropTypes} from "react";

import {Row, Col} from "react-flexbox-grid/lib";

import EpiStore from "epi/store";
import EpiActions from "epi/actions";
import {createEmptyWorkflow} from "epiwf/util";
import EpiStepper from "./stepper";
import * as Steps from "./steps";

import classNames from "classnames";
import style from "./style";


const createOrder = [
  {step: Steps.EpiDescriptionStep, section: Steps.EpiDescription, key: "desc"},
  {step: Steps.EpiNormalStep, section: Steps.EpiNormal, key: "normal"},
  {step: Steps.EpiTumorStep, section: Steps.EpiTumor, key: "tumor"},
  {step: Steps.EpiRNAStep, section: Steps.EpiRNA, key: "rna"},
  {step: Steps.EpiToolsStep, section: Steps.EpiTools, key: "tools"},
  {step: Steps.EpiSubmitStep, section: Steps.EpiSubmit, key: "submit"}
];

const loadEmptyWorklow = (props) => {
  const workflow = createEmptyWorkflow(props.params.workflowId);
  EpiActions.workflowUpdated(workflow);
};

class EpiCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = EpiStore.getWorkflowState();
    this.updateWorkflow = this.updateWorkflow.bind(this);
  }

  updateWorkflow() {
    this.setState(EpiStore.getWorkflowState());
  }

  componentWillUnmount() {
    EpiStore.removeChangeListener(this.updateWorkflow);
  }

  componentWillMount() {
    EpiStore.addChangeListener(this.updateWorkflow);
    loadEmptyWorklow(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.workflowId !== this.props.params.workflowId) {
      loadEmptyWorklow(nextProps);
    }
  }

  render() {
    const wf = this.state.workflow;
    const sections = createOrder.map(({section: Epicomponent, key}, index) => {
      let className = classNames(style.episection,
        wf.stepIndex == index ? style.active : style.deactive);

      return (
        <div className={className} key={key}>
          <Epicomponent
            workflow={wf}
            classNames={className}
            open={wf.stepIndex == index}
          />
        </div>
      );
    });

    const steps = createOrder.map(({step, key}, index) => {
      let onClick = () => EpiActions.stepIndexChanged(index);
      let completed = false;
      return step({onClick, completed, key});
    });

    return (
        <Row>
          <Col xs={4}>
            <EpiStepper stepIndex={wf.stepIndex}>{steps}</EpiStepper>
          </Col>
          <Col xs={8} style={{marginTop: 15}}>
            {sections}
            <Steps.EpiNavigation
              stepIndex={wf.stepIndex}
              numberOfSteps={createOrder.length}
            />
          </Col>
        </Row>
    );
  }
}
EpiCreate.propTypes = {
  params: PropTypes.shape({
    workflowId: PropTypes.string.isRequired
  }).isRequired
};

export default EpiCreate;
