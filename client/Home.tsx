import * as React from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import graduatesWalk from './assets/GraduatesWalk.jpg';
import Jessica from './assets/Jessica.jpg';
import Louisa from './assets/Louisa.jpg';
import { HomeCarousel } from './HomeCarousel';



export const Home: React.FC = () => {

    return (
          <><HomeCarousel /><div>
        <Container fluid>
          <Row className="infoRow">
            <Col className="infoTitle">OUTDOOR/ ADVENTURE PHOTOGRAPHY</Col>
            <Col className="infoTitle">YOUR EVENT/ FAMILY PHOTOGRAPHY</Col>
            <Col className="infoTitle">BASED IN THE SEATTLE AREA</Col>
          </Row>
          <Row>
            <Col>Whether you are looking to elope or celebrate an engagement, anniversary or just want pictures taken in your favorite spot - I would love to capture your special moment.</Col>
            <Col>If you are looking to get family pictures taken or for someone to capture your special event, such as baby showers, bridal showers and even your dog&aposs birthday - feel free to contact me!</Col>
            <Col>My name is Louisa Janssen and I came to the PNW from Germany in 2015. I love the outdoors and all that the PNW has to offer and know all the good spots for beautiful pictures.</Col>
          </Row>
          <Row>
            <Col><img src={Jessica} height="300" /></Col>
            <Col><img src={graduatesWalk} height="300" /></Col>
            <Col><img src={Louisa} height="300" /></Col>
          </Row>
        </Container>
      </div></>
    )
}
