import React from 'react';

import home from './style';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

import EpiHeader from '../header';
import EpiStepper from '../stepper';
import EpiFooter from '../footer';

import {EpiDescription, EpiNormal, EpiTumor, EpiRNA, EpiTools} from '../workflow';
import {EpiStore} from '../../store';

const getStoreState = () => ({ "wf": EpiStore.workflow });

class EpiHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = getStoreState();
    this.updateWorkflow = this.updateWorkflow.bind(this);
  }

  updateWorkflow() {
    this.setState(getStoreState());
  }

  componentDidMount() {
    EpiStore.addChangeListener(this.updateWorkflow);
  }

  componentWillUnmount() {  
    EpiStore.removeChangeListener(this.updateWorkflow);
  }

  render() {
    const wf = this.state.wf;

    return (
      <Grid fluid className={home.wrap}>
        <Row>
          <Col xs={12}>
            <EpiHeader />
          </Col>
        </Row>
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
        <Row>
          <Col xs={12}>
            <EpiFooter />
          </Col>
        </Row>
      </Grid>
    );
  }  
}

export default EpiHome;