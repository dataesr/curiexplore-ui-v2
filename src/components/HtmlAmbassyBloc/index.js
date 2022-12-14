import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

import { Col, Container, Row, Title } from '@dataesr/react-dsfr';

export default function HtmlAmbassyBloc({ data }) {
  if (!data) return null;

  return (
    <Container fluid>
      <Row>
        <Col>
          <Title as="h3">
            {data.thematique}
          </Title>
        </Col>
      </Row>
      <Row>
        <Col>
          {Parser(data.description)}
        </Col>
      </Row>
    </Container>
  );
}

HtmlAmbassyBloc.propTypes = {
  data: PropTypes.object.isRequired,
};
