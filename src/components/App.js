import React from 'react';
import Header from './Header';
import ProduceControl from './ProduceControl';
import LocationControl from './LocationControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
  <React.Fragment>
    <Container>
    <Header /> 
    <Row>
      <Col><ProduceControl /></Col>
      <Col> <LocationControl /></Col>
    </Row>
    </Container>
  </React.Fragment>

);
}

export default App;
