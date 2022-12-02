import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import logoImage from '../assets/images/bg/logo.png';

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={logoImage} width="30" height="30" className="d-inline-block align-top" /> EmetFilms
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#anime">ANIME SERIES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
