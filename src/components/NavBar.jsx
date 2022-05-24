import { Navbar, Nav, Container } from 'react-bootstrap';


function NavBar() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">GAMER <span style={{ color: "#FF7F11" }}>ROOM</span></Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link href="PS4">PS4</Nav.Link>
                    <Nav.Link href="PS5">PS5</Nav.Link>
                    <Nav.Link href="Todos los Juegos">Todos Los Juegos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    );
}
export default NavBar;