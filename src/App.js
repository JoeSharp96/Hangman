import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Letters from './components/Letters';
import GameButtons from './components/GameButtons';
import HangmanDrawings from './components/HangmanDrawings';

function App() {
  return (
    <Container>
      <Row className='my-5'>
        <Col>
          <HangmanDrawings />
        </Col>
        <Col>
          <Letters />
        </Col>
      </Row>
      <Row>
        <GameButtons />
      </Row>
    </Container>
  );
}

export default App;
