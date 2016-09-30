import React from 'react';
import {Link} from 'react-router';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Row, Col} from 'react-flexbox-grid/lib';

import style from './style';

const EpiWelcome = (props) => (
  <Row>
    <Col xs={12}>
      <Card>
        <CardHeader
          title="Personalized cancer epitope discovery and peptide vaccine prediction pipeline"
          titleStyle={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}
        />
        <CardMedia>
          <img src="static/img/pipeline.png" />
        </CardMedia>
        <CardActions>
          <Link to="/new">
            <RaisedButton
              label="Create a new workflow"
              fullWidth={true}
              secondary={true}
            />
          </Link>
        </CardActions>
      </Card>
    </Col>
  </Row>
);

export default EpiWelcome;
