import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import profile from '../../image/icon_user.png';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate();
    if (loading) {
        return <Loading></Loading>
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
        navigate('/home');
    }
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
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter Your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' placeholder="Password" />
                            </Form.Group>
                            <Button className='register-btn mt-4 mx-auto' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>

                    </div>
                    <p className='mt-3'>Already have an account? <Link to='/login'>Login</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;