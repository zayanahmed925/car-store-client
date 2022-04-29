import React from 'react';
import './Login.css';
import profile from '../../image/icon_user.png';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        const email = e.target.name.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        navigate('/home')
    }
    return (
        <div className='login-container'>
            <div className="login-item">
                <div>
                    <div className='login-image'>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <h2 className='text-center'>Login</h2>
                    </div>
                    <div className="mx-auto  form-container">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className='login-btn mx-auto' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>

                    </div>
                    <p className='mt-3'>Don't have an account? <Link to='/register'>Register Now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;