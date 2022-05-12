import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
// import './Register.css';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorElement
    const navigate = useNavigate();


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='container'>
            <div className='row  d-flex justify-content-center'>
                <div className='col-md-4 col-lg-6 mt-5'>
                    <h2 className='clr text-center mt-2'>Please Register...</h2>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control className='mb-3' type="text" name="name" placeholder="Enter Name" />
                            <Form.Control type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={` ${agree ? '' : 'text-danger'}`} label="Accept ClothingWarehouse Terms and Conditions" />
                        </Form.Group>
                        {errorElement}
                        <Button variant="warning px-5 py-2  w-50 mx-auto d-block mb-2" disabled={!agree} type="submit">
                            Submit
                        </Button>
                    </Form>

                    <p className='text-danger'>Already have an account? <Link to="/login" className='clr pe-auto ' >Please Login</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;