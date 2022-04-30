import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='row'>
        <div className='w-25 bg-danger mt-5 rounded d-block mx-auto'>
        <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Login
            </Button>
            </Form>
            <p>New to Limbo of low? <Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
            {/* <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p> */}
        </div>
    </div>
    );
};

export default Login;