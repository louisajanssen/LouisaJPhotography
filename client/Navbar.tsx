import * as React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';

// import Louisa from './assets/Louisa.jpg';

interface IProps {
    onHomeClicked: () => void
    onPortfolioClicked: () => void
    onContactClicked: () => void
    }


export const NavBar: React.FC<IProps> = ({ onHomeClicked, onPortfolioClicked, onContactClicked }: IProps) => {


      // {
      //   key: 'home',
      //   text: 'Home',
      //   onClick: onHomeClicked,
      //   style: {background: '#d8d8d8', paddingTop: '10px'}
      // },


    return (
      <Navbar bg="light" variant="light" expand="sm">
        <Container>
        <Navbar.Brand href="#home">LouisaJPhotography</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick={onHomeClicked}>Home</Nav.Link>
          <Nav.Link href="#portfolio" onClick={onPortfolioClicked}>Portfolio</Nav.Link>
          <Nav.Link href="#contact" onClick={onContactClicked}>Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      );
    };
