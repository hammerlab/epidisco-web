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

import uuid from 'uuid';

import style from './style';

const EpiWelcome = (props) => (
  <Row>
    <Col xs={12}>
      <Card>
        <CardMedia>
          <img src="static/img/pipeline.png" />
        </CardMedia>
        <CardTitle
          title="Epidisco"
          subtitle="Personalized cancer epitope discovery and peptide vaccine prediction pipeline"
        />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eget tempor leo.
          Morbi ultrices, ligula tempor tincidunt congue,
          purus erat ultrices turpis, in accumsan enim nunc in lacus.
          Integer enim tortor, iaculis id volutpat sit amet, posuere vel risus.
          Nulla eleifend arcu et arcu luctus, sed consequat erat volutpat.
          Nulla molestie, lectus sit amet faucibus convallis,
          nunc tellus porttitor tellus, a dignissim urna ante eu metus.
          Quisque ut convallis massa. Cras congue est vitae suscipit placerat.
          Fusce maximus hendrerit rutrum.
          In interdum nunc odio, nec efficitur turpis semper in.
          Nam rhoncus erat eget ipsum convallis facilisis.
          Maecenas sollicitudin scelerisque pulvinar.
        </CardText>
        <CardActions>
          <Link to={"create/" + uuid.v1()}>
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
