import React from 'react';

import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import LocalOffer from 'material-ui/svg-icons/maps/local-offer';

import {Grid, Row, Col} from 'react-flexbox-grid/lib';

import EpiSection from 'epi/components/section';

import style from './style';


export default (props) => {
  const desc = props.description;
  const chips = desc.tags.map(
    (t, i) => (
      <Chip key={i} className={style.chip} style={{margin: 5}}>
        {t}
      </Chip>
    )
  );

  return (
    <EpiSection title="Workflow details">
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <TextField
              hintText="Lung Cancer Patient #42"
              floatingLabelText="Run Name"
              value={desc.name}
              fullWidth={true}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextField
              hintText="somebody@hammerlab.org"
              floatingLabelText="E-mail address"
              value={desc.email}
              fullWidth={true}
            />
          </Col>
        </Row>
        <Row middle="xs" center="xs">
          <Col xs={1}>
            <LocalOffer />
          </Col>
          <Col xs={11}>
            <div className={style.chips}>
              {chips}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextField
              hintText={"HLA-A*01:01\nHLA-A*02:01"}
              floatingLabelText="HLA Types (one per line - optional)"
              multiLine={true}
              fullWidth={true}
              rows={2}
              rowsMax={6}
              value={desc.hlas.join("\n")}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <TextField
              floatingLabelText="Unique identifier"
              value={desc.id}
              fullWidth={true}
              disabled={true}
            />
          </Col>
        </Row>
      </Grid>
    </EpiSection>
  );
};
