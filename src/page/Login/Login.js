import React, { useRef } from 'react';
import './Login.css';
import profile from '../../image/icon_user.png';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const location = useLocation();

    let errorElement;
    if (error) {
        errorElement =
            <div style={{ color: 'red' }}>
                <p>Error: {error?.message}</p>
            </div>

    }
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email })
        console.log(data)
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }

    if (user) {
        // navigate(from, { replace: true });
    }
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your email');
        }
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
                                <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" />
                            </Form.Group>

                            {errorElement}
                            <Button className='login-btn mt-4 mx-auto' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>

                    </div>

                    <p className='mt-3'>Don't have an account? <Link to='/register'>Register Now</Link></p>
                    <p>Forget Password?  <a style={{ cursor: 'pointer' }} onClick={handleReset} className='text-primary  pe-auto '>Reset Password</a></p>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;