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

    const navigate = useNavigate();


    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
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
        //  <div className='container'>
        //      <div className='row d-flex justify-content-center'>
        //      <div className='col-md-12 col-sm-12 col-lg-12 mt-5 '>
        //         <div className='register-form'>
        //         <h2 className='clr text-center mt-2'>Please Register</h2>
        //         <form onSubmit={handleRegister} >
        //             <input c type="text" name="name" id="" placeholder='Your Name' />

        //             <input type="email" name="email" id="" placeholder='Email Address' required />

        //             <input type="password" name="password" id="" placeholder='Password' required />
        //             <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        //             <label className={`ps-2 ${agree ? '' : 'clr'}`} htmlFor="terms">Accept ClothingWarehouse Terms and Conditions</label>
        //             <input
        //                 disabled={!agree} className='btn btn-warning my-3'
        //                 type="submit"
        //                 value="Register" />
        //         </form>
                // <p>Already have an account? <Link to="/login" className='clr pe-auto text-decoration-none' >Please Login</Link> </p>
                // <SocialLogin></SocialLogin>
        //         </div>
        //     </div>
        //      </div>
        //  </div>
       <div className='container'>
           <div className='row  d-flex justify-content-center'>
               <div className='col-md-4 col-lg-6 mt-5'>
               <h2 className='clr text-center mt-2'>Please Register...</h2>
           <Form  onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='mb-3' type="text" name="name" placeholder="Enter Name" />
                <Form.Control type="email" name="email"   placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={() => setAgree(!agree)} type="checkbox" className={` ${agree ? '' : 'clr'}`} label="Accept ClothingWarehouse Terms and Conditions" />
            </Form.Group>
            <Button variant="warning px-5 py-2  w-50 mx-auto d-block mb-2" disabled={!agree} type="submit">
                Submit
            </Button>
        </Form>
        
        <p>Already have an account? <Link to="/login" className='clr pe-auto text-decoration-none' >Please Login</Link> </p>
                <SocialLogin></SocialLogin>
               </div>
           </div>
       </div>
    );
};

export default Register;