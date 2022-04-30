import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement =
            <div style={{ color: 'red' }}>
                <p>Error: {error?.message}</p>
            </div>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
                <div className='mx-3'>OR</div>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-secondary mt-3 w-50 d-block mx-auto'>Googgle Sign in</button>
        </div>
    );
};

export default SocialLogin;