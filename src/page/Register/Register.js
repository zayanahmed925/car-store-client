import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../image/icon_user.png';
import './Register.css';
const Register = () => {
    return (
        <div className='register-container'>
            <div className="register-item">
                <div>
                    <div className='register-image'>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <h2 className='text-center'>Register</h2>
                    </div>
                    <div className="mx-auto  form-container">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className='register-btn mx-auto' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;