import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user ] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }}
                );
            setOrders(data)
        }
        getOrders()
    }, [user])
    return (
    <div className='w-50 mx-auto'>
    <h2>My orders: {orders.length}</h2>
    {
        orders.map(order => <div
         key={order.id}>
             <div className='d-flex '> 
             <img className='mt-2' width={100} height={100} src={order?.img} alt="" /> 
            <h5 className='manageh2'>{order?.service}</h5>
            </div>
        </div>)
    }
</div>
    );
};

export default Orders;