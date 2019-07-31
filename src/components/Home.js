import React from 'react';
import Header from './View components/Header';
import { Jumbotron, Container, Col, Image, Row, Button } from 'react-bootstrap'
import banner from '../banner.jpg'
import Search from './View components/Search'
import CardComponent from './View components/CardComponent'
import './App.scss'
import { connect } from 'react-redux';
import FooterComponent from './View components/Footer';
import image from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
//   import Messages from './components/Messages';

class Home extends React.Component {
    componentDidMount() {
        if (!localStorage.getItem('login')){
            this.props.history.push('/')
        }
    }
    logout = () =>{
        localStorage.removeItem('login')
        this.props.history.push('/')
    }
    render() {
        return (
            <React.Fragment>
                <Header logout={this.logout} />
                <Jumbotron>
                    <Image src={banner} fluid />
                    {/* <Container>
                </Container> */}
                </Jumbotron>
                <Container>
                    <Search />
                    <Row className="justify-content-md-center">
                        <h1 className="text-center mt-5">AWARD WINNING HOTELS</h1>
                    </Row>
                    <Row className="p-3">
                        <Col sm={4}>
                            <CardComponent image={image} thumbnail={true} />
                        </Col>
                        <Col sm={4}>
                            <CardComponent image={image2} thumbnail={true} />
                        </Col>
                        <Col sm={4}>
                            <CardComponent image={image3} thumbnail={true} />
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col sm={4}>
                            <CardComponent image={image4} thumbnail={true} />
                        </Col>
                        <Col sm={4}>
                            <CardComponent image={image5} thumbnail={true} />
                        </Col>
                        <Col sm={4}>
                            <CardComponent image={image6} thumbnail={true} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Button variant="outline-primary"> MORE</Button>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={5}>
                            <h1 className="text-center mt-5">DELUXE ROOMS WITH A BEAUTIFUL VIEW</h1>
                        </Col>
                    </Row>
                    <Row className="p-3">
                        <Col sm={3}>
                            <CardComponent image={image} thumbnail={true} class="ad-image" />
                            <CardComponent image={image2} thumbnail={true} class="ad-image" />
                        </Col>
                        <Col sm={6}>
                            <CardComponent image={image2} rounded={true} class="main-ad-image" />
                        </Col>
                        <Col sm={3}>
                            <CardComponent image={image5} thumbnail={true} class="ad-image" />
                            <CardComponent image={image6} thumbnail={true} class="ad-image" />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Button variant="outline-primary"> MORE</Button>
                    </Row>
                </Container>
                <FooterComponent />
            </React.Fragment>
        )
    }
}
export default connect(state => ({
    loggedIn: state.user.loggedIn
}))(Home)