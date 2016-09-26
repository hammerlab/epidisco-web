import React from 'react';

import {Row, Col} from 'react-flexbox-grid/lib';

import EpiActions from 'epi/actions';
import EpiStore from 'epi/store';
import {fetchWorkflow} from 'epiwf/util';


const fetchAndLoadWorkflow = (props) => {
  fetchWorkflow(props.params.workflowId, (workflow) => {
    EpiActions.workflowUpdated(workflow);
  });
};

class EpiView extends React.Component {
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
    fetchAndLoadWorkflow(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.workflowId !== this.props.params.workflowId) {
      fetchAndLoadWorkflow(nextProps);
    }
  }

  render() {
    const wf = this.state.workflow;

    return (
      <Row>
        <Col xs={12}>
          <h1>{wf.description.name}</h1>
        </Col>
      </Row>
    );
  }
}

export default EpiView;
