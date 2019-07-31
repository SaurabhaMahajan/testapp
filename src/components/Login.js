
import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import MainContainer from './Container Component/MainContainer';
import { login } from '../redux/actions/index';

class Login extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('login')) {
            this.props.history.push('/home')
        }
        this.props.dispatch({
            type: 'Login'
        })
    }
    render() {
        let user = this.props.user;
        return (
            <>
                <Alert show={user.data ? true : false} variant="danger">{user.data && user.data.error}</Alert>
                <MainContainer>
                    <Row>
                        <Col sm={12} className="bg-white text-dark p-5 border-dark rounded sans">
                            <Card.Header as="h3" className="text-center bg-white border-0">Login</Card.Header>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                        .email('Email is invalid')
                                        .required('Email is required'),
                                    password: Yup.string()
                                        .min(6, 'Password must be at least 6 characters')
                                        .required('Password is required')
                                })}
                                onSubmit={(fields) => {
                                    this.props.dispatch(login(fields, () => {
                                        this.props.history.push('/home')
                                    }));
                                }}
                                render={({ errors, status, touched }) => (
                                    <Form>
                                        <div className="form-group">
                                            {/* <label htmlFor="email">Email</label> */}
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white">
                                                        <i className="fa fa-envelope fa-fw"></i>
                                                    </span>
                                                </div>
                                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            {/* <label htmlFor="password">Password</label> */}
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text bg-white">
                                                        <i className="fa fa-lock fa-fw"></i>
                                                    </span>
                                                </div>
                                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center p-3">
                                            <button type="submit" className="btn btn-primary mr-5">Login</button>
                                            <Link to="/register/">New? Register Here</Link>
                                        </div>
                                    </Form>
                                )}
                            />
                        </Col>
                    </Row>
                </MainContainer>
            </>
        )
    }
}
export default connect(state => ({
    loggedIn: state.user.loggedIn,
    ...state
}))(Login)