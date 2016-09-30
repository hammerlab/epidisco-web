import React from "react";
import {Link} from "react-router";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import ChevronLeft from "material-ui/svg-icons/navigation/chevron-left";
import Done from "material-ui/svg-icons/action/done";
import LinkIcon from "material-ui/svg-icons/content/link";
import {Step, StepButton} from "material-ui/Stepper";

import EpiSection from "epiwf/util/section";
import EpiActions from "epi/actions";
import EpiStore from "epi/store";

import style from "./style";


const EpiSubmitStep = (props) => (
  <Step key={props.key}>
    <StepButton onClick={props.onClick} completed={props.completed}>
      Submit
    </StepButton>
  </Step>
);

class EpiSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false,
      workflow: props.workflow
    };
  }

  componentWillUpdate(nextProps) {
    const {open} = nextProps;
    if(open != this.props.open) {
      this.setState({open});
    }
  }

  render() {
    const handleSubmit = () => {
      EpiActions.workflowSubmitted(true);
      this.setState({open: false});

      let xmlHttp = new XMLHttpRequest();
      let {workflow} = EpiStore.getWorkflowState();
      let id = workflow.description.id;
      let wfstr = encodeURIComponent(JSON.stringify(workflow));
      let url = `/workflows/${id}/`;
      xmlHttp.open("PUT", url, false); // false for synchronous request
      xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xmlHttp.send(`data=${wfstr}`);
    };

    const handleCancel = () => {
      EpiActions.stepIndexChanged(this.state.workflow.stepIndex - 1);
      this.setState({open: false});
    };

    const actions = [
      <FlatButton
        label="No — Go back"
        primary={false}
        onTouchTap={handleCancel}
        icon={<ChevronLeft />}
      />,
      <FlatButton
        label="Yes — Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={handleSubmit}
        icon={<Done />}
      />
    ];

    return (
      <div>
        <div className={this.state.open ? style.msghidden : style.msgshown}>
          <EpiSection title="Workflow submitted">
            <div>
              <p>
                Your workflow has been successfully submitted!
                Once the workflow is completed,
                we will be emailing you a summary report
                with all the analysis results in it.
              </p>
              <Link to={`view/${this.props.workflow.description.id}`}>
                <RaisedButton
                  label="Check status"
                  primary={true}
                  keyboardFocused={true}
                  icon={<LinkIcon />}
                  fullWidth={true}
                />
              </Link>
            </div>
          </EpiSection>
        </div>
        <Dialog
          title="Confirm submission"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Clicking on <b>submit</b> will finalize this configuration
          and submit your workflow request to our servers.
          Are you sure you want to submit this workflow?
        </Dialog>
      </div>
    );
  }
}

export {EpiSubmit, EpiSubmitStep};
