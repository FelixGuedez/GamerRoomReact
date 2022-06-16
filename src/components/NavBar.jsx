import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Link className='brand' to = {'/home'}> GAMER <span className='brand-span' style={{ color: "#FF7F11" }}>ROOM</span></Link>
            <Container>
                <Nav className="me-auto">
                    <Link className='link-NavBar' to = {'/category/Ps4'}>PS4</Link>
                    <Link className='link-NavBar' to = {'/category/Ps5'}>PS5</Link>
                    <Link className='link-NavBar' to = {'/home'}>Todos Los Juegos</Link>
                </Nav>
            <CartWidget items ={2}/>
            </Container>
        </Navbar>

    );
}
export default NavBar;


