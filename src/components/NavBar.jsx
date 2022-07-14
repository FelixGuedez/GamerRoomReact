import { Navbar, Nav, Container} from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function NavBar() {
    const[expanded, setExpanded] = useState(false)

    return (
        <Navbar expanded={expanded} bg="dark" expand="lg" variant="dark">
            <Container>
                <Link className='brand' to={'/home'} onClick={() => setExpanded(false)}> GAMER <span className='brand-span' style={{ color: "#FF7F11" }}>ROOM</span></Link>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='link-NavBar' to={'/category/Ps4'} onClick={() => setExpanded(false)}>PS4</Link>
                        <Link className='link-NavBar' to={'/category/Ps5'} onClick={() => setExpanded(false)}>PS5</Link>
                        <Link className='link-NavBar' to={'/home'} onClick={() => setExpanded(false)}>Todos Los Juegos</Link>
                    </Nav>
                    <Link to={'/cart'}> <CartWidget /> </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;


