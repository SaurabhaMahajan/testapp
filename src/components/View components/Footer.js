import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from './Header'

// import NavbarToggle from 'react-bootstrap/NavbarToggle';
//   import Messages from './components/Messages';

function FooterComponent(props) {
    return (
        <footer className="m2 p-5 white-color">
            <Container>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={1}><i className="fa fa-map-marker icon" /></Col>
                            <Col sm={8} className="icon"> 123, Main Street, NY 456789 </Col>
                        </Row>
                        <Row>
                            <Col sm={1}><i className="fa fa-mobile icon" /></Col>
                            <Col sm={8} className="icon"> +12 345 67890 </Col>
                        </Row>
                        <Row>
                            <Col sm={1}><i className="fa fa-mail icon" /></Col>
                            <Col sm={8} className="icon"> free@psdfreebies.com </Col>
                        </Row>
                    </Col>
                    <Col sm={6}>
                        <Header footer={true} />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default FooterComponent