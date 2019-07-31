import React from 'react';
import { Navbar, Form, Container, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../logo.png'
import { Menus as constants } from '../../constants/stringConstants'


class Header extends React.Component {
    logout = () => {
        this.props.logout();
    }
    render() {
        let props = this.props;
        return (
            <>
                <Container>
                    <Navbar sticky="top" bg={props.footer ? "black" : "white"} variant="light" className="justify-content-between font-family" expand='md'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Brand href="/home" className="align-self-end">
                            {
                                !props.footer && <img
                                    alt=""
                                    src={logo}
                                    width="200"
                                    height="100"
                                    className="d-inline-block align-top align-left"
                                />
                            }
                        </Navbar.Brand>
                        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                        <Col sm={props.footer ? 6 : 8}>
                            <Form inline>
                                {constants.map((element, index) =>
                                    <Navbar.Brand key={index} className={props.footer ? "float-lg-right navbar-right white-color" : "float-lg-right navbar-right"}>
                                        {element}
                                    </Navbar.Brand>)}
                                {!props.footer &&
                                    <Link className={props.footer ? "float-lg-right navbar-right white-color" : "float-lg-right navbar-right"} onClick={this.logout}>
                                        LOGOUT
                                    </Link>
                                }
                            </Form>
                        </Col>
                        {/* </Navbar.Collapse> */}
                    </Navbar>
                </Container>
            </>
        )
    }
}
export default Header