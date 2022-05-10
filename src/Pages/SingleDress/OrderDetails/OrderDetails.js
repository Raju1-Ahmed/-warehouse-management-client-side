import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProducts from '../../../hooks/useProducts';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderDetails = () => {
    const {serviceId} = useParams();
    const [service] = useProducts(serviceId);
    const [user] = useAuthState(auth);


    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email:user.email,
            img: service.img,
            service: service.name,
            quantity: service.quantity,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://still-journey-93774.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
        <h2>Please Order: {service.name}</h2>
        <form onSubmit={handlePlaceOrder}>
            <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='name' required readOnly disabled/>
            <br />
            <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled />
            <br />
            <input className='w-100 mb-2' placeholder='Photo URL' type="text" value={service.img} required readOnly disabled />
            <br />
            <input className='w-100 mb-2' type="text" value={service.name} name="service" placeholder='service' required readOnly />
            <br />
            <input className='w-100 mb-2' type="text"  value={service.quantity} name="Quantity" placeholder='Quantity' required  />
            <br />
            <input className='w-100 mb-2' type="text" name="address" placeholder='address' autoComplete='off' required />
            <br />
            <input className='w-100 mb-2' type="text" name="phone" placeholder='phone' required />
            <br />
            <input className='px-5 py-2 nmstyle ' type="submit" value="Delivery" />
        </form>
    </div>
    );
};

export default OrderDetails;