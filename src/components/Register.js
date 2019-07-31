import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import MainContainer from './Container Component/MainContainer';
import { register } from '../redux/actions/index';

class Register extends React.Component {
    render() {
        return (
            <MainContainer>
                <Row>
                    <ErrorMessage>{this.props.error}</ErrorMessage>
                    <Col sm={12} className="bg-white text-dark p-5 border-dark rounded sans">
                        <Card.Header as="h3" className="text-center bg-white border-0">Register</Card.Header>
                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                password: '',
                                confirmPassword: ''
                            }}
                            validationSchema={Yup.object().shape({
                                firstName: Yup.string().matches(/^[a-zA-Z]+$/, { message: 'Please provide valid name', excludeEmptyString: true })
                                    .required('First Name is required'),
                                lastName: Yup.string().matches(/^[a-zA-Z]+$/, { message: 'Please provide valid name', excludeEmptyString: true })
                                    .required('Last Name is required'),
                                email: Yup.string()
                                    .email('Email is invalid')
                                    .required('Email is required'),
                                password: Yup.string()
                                    .min(6, 'Password must be at least 6 characters')
                                    .required('Password is required'),
                                confirmPassword: Yup.string()
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                                    .required('Confirm Password is required')
                            })}
                            onSubmit={fields => {
                                this.props.dispatch(register(fields, () =>{
                                    this.props.history.push('/home')
                                }));
                            }}
                            render={({ errors, status, touched }) => (
                                <Form>
                                    <div className="form-group">
                                        <Row>
                                            <label htmlFor="firstName">First Name {status}</label>
                                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                                        </Row>
                                    </div>
                                    <div className="form-group">
                                        <Row>
                                            <label htmlFor="lastName">Last Name</label>
                                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                        </Row>
                                    </div>
                                    <div className="form-group">
                                        <Row>
                                            <label htmlFor="email">Email</label>
                                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </Row>
                                    </div>
                                    <div className="form-group">
                                        <Row>
                                            <label htmlFor="password">Password</label>
                                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </Row>
                                    </div>
                                    <div className="form-group">
                                        <Row>
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                        </Row>
                                    </div>
                                    <div className="d-flex justify-content-center p-3">
                                        <button type="submit" className="btn btn-primary mr-5">Register</button>
                                        <Link to="/">Already an user?</Link>
                                    </div>
                                </Form>
                            )}
                        />
                    </Col>
                </Row>
            </MainContainer>

        )
    }
}
export default connect(state => ({
    loggedIn: state.user.loggedIn
}))(Register)