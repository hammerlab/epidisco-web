import React from 'react';

import {Row, Col} from 'react-flexbox-grid/lib';

import EpiStore from 'epi/store';
import EpiActions from 'epi/actions';
import {fetchWorkflow, createEmptyWorkflow} from 'epiwf/util';
import EpiStepper from './stepper';
import * as Steps from './steps';

import classNames from 'classnames';
import style from './style';


const viewOrder = [
  {section: Steps.EpiDescription, key: 'desc'},
  {section: Steps.EpiNormal, key: 'normal'},
  {section: Steps.EpiTumor, key: 'tumor'},
  {section: Steps.EpiRNA, key: 'rna'},
  {section: Steps.EpiTools, key: 'tools'}
];

const fetchAndLoadWorkflow = (props) => {
  fetchWorkflow(props.params.workflowId, (workflow) => {
    EpiActions.workflowUpdated(workflow);
  });
};

const loadEmptyWorklow = (props) => {
  const workflow = createEmptyWorkflow(props.params.workflowId);
  EpiActions.workflowUpdated(workflow);
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

  render() {
    const wf = this.state.workflow;
    const sections = viewOrder.map(({section: Epicomponent, key}, index) => {
      let className = classNames(style.episection, style.active);

      return (
        <div className={className} key={key}>
          <Epicomponent
            workflow={wf}
            classNames={className}
          />
        </div>
      );
    });

    return (
      <div>
        <Row>
          <Col xsOffset={1} xs={10} style={{marginTop: 15}}>
            <EpiStepper />
          </Col>
        </Row>
        <Row>
          <Col xsOffset={1} xs={10}>
            {sections}
          </Col>
        </Row>
      </div>
    );
  }
}

export default EpiView;
