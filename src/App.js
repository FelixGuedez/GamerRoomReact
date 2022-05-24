import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';


function App() {

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Bienvenidos a Gamer Room</h1>
      </Container>
    </div>
  );
}

export default App;
