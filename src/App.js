import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputField from './Component/inputField';
import { Container, Row ,Col} from 'react-bootstrap';
import Report from './Component/Table';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
           <InputField/>
           <hr/>
           <Report/>
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
