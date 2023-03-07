import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';


function Header() {
  return (
    <Navbar className="nav" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="nabvar-brand" href="../../homepage"><img className='logo' src="img/logo.png" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='navbar-collapse' id="basic-navbar-nav">
          <Nav className="links">
            <Nav.Link href="../../homepage">Home</Nav.Link>
            <Nav.Link href="../../Facilities">Facilities</Nav.Link>
            <Nav.Link href="../../rooms">Rooms</Nav.Link>
            <Nav.Link href="../../contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;