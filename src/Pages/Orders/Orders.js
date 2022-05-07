import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{

        const getOrders = async() =>{
            const url = `http://localhost:5000/order`
        const {data}  = await axios.get(url)
        setOrders(data)
    }
    getOrders()
    },[user])
return (
    <div>
        <h2>This is orders Area.....{orders.length}</h2>
    </div>
);
};

export default Orders;