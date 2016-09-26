import React from 'react';

import {Row, Col} from 'react-flexbox-grid/lib';

import {EpiStepper, createEmptyWorkflow} from 'epiwf/util';
import EpiStore from 'epi/store';
import EpiNormal from './normal';
import EpiDescription from './description';
import EpiTumor from './tumor';
import EpiRNA from './rna';
import EpiTools from './tools';
import EpiActions from 'epi/actions';

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

    return (
        <Row>
          <Col xs={4}>
            <div>
             <EpiStepper stepIndex={wf.stepIndex} />
            </div>
          </Col>
          <Col xs={8}>
            <EpiDescription description={wf.description} />
            <EpiNormal files={wf.normal.files} />
            <EpiTumor files={wf.tumor.files} />
            <EpiRNA files={wf.rna.files} />
            <EpiTools tools={wf.tools} />
          </Col>
        </Row>
    );
  }
};

export default EpiCreate;
